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
import { Box, CardMedia } from "@mui/material";
import { Customer, Photo } from "./Types";

const CustomerDetails = ({ customer }: { customer: Customer }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);
  const photosPerPage = 9;
  const maxPages = 1000;

  const UNSPLASH_ACCESS_ID = import.meta.env.VITE_UNSPLASH_API_KEY;

  const fetchPhotos = async (pageNum: number) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pageNum}&query=office&client_id=${UNSPLASH_ACCESS_ID}`
      );
      setPhotos(response.data.results.slice(0, photosPerPage));
      console.log(response.data.results.slice(0, photosPerPage));
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
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  "0px 4px 6px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0px 6px 10px rgba(0,0,0,0.15), 0px 2px 4px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={`${photo.urls.small}?w=200&fit=crop&auto=format`}
                alt={photo.description || "No description"}
                sx={{ height: 130, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  {photo.description || "No title"}
                </Typography>
              </CardContent>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default CustomerDetails;
