import { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CustomerDetails = ({ customer }: { customer: any }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);
  const photosPerPage = 9;
  const maxPages = 1000;

  const fetchPhotos = async (pageNum: number) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pageNum}&query=office&client_id=DiW-dX-Rbscxv1Lg6CkA4kt5dxfLXvM59qnYgS20WW4`
      );
      setPhotos(response.data.results.slice(0, photosPerPage));
    } catch (error) {
      console.error("Error fetching photos", error);
    }
  };

  useEffect(() => {
    fetchPhotos(page);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + photosPerPage) % photos.length;

        if (newIndex === 0) {
          setPage((prevPage) => (prevPage < maxPages ? prevPage + 1 : 1));
          fetchPhotos(page);
        }

        return newIndex;
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [page, photos.length]);

  const displayImages = () => {
    const endIndex = (currentIndex + photosPerPage) % photos.length;

    if (endIndex > currentIndex) {
      return photos.slice(currentIndex, endIndex);
    }

    return [...photos.slice(currentIndex), ...photos.slice(0, endIndex)];
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ height: "100vh", padding: 4 }}
    >
      <Card sx={{ width: 400, marginBottom: 4 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {customer.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Title: </span>
            {customer.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Address: </span>
            {customer.address}
          </Typography>
        </CardContent>
      </Card>

      <ImageList
        sx={{ width: "100%", height: 600 }}
        cols={3}
        rowHeight={130}
        gap={10}
      >
        {displayImages().map((photo) => (
          <ImageListItem key={photo.id}>
            <img
              srcSet={`${photo.urls.small}?w=200&fit=crop&auto=format&dpr=2 2x`}
              src={`${photo.urls.small}?w=200&fit=crop&auto=format`}
              alt={photo.description || "No description"}
              style={{ objectFit: "cover", width: "100%", height: "100%" }} 
            />
            <ImageListItemBar
              title={photo.description || "No title"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${photo.description}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default CustomerDetails;
