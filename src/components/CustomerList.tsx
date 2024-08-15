import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Customer } from "./Types";

type CustomerListProps = {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
};

const CustomerList = ({ customers, onSelect }: CustomerListProps) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    customers.length > 0 ? customers[0].id : null
  );

  useEffect(() => {
    if (customers.length > 0) {
      onSelect(customers[0]);
    }
  }, [customers, onSelect]);

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div
          key={customer.id}
          onClick={() => {
            setSelectedCustomerId(customer.id);
            onSelect(customer);
          }}
        >
          <Card
            sx={{
              marginBottom: 1,
              background:
                selectedCustomerId === customer.id ? "lightgray" : "white",
              borderRight:
                selectedCustomerId === customer.id ? "3px solid black" : "",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {customer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {customer.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
