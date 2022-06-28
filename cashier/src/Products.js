import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardMedia } from "@mui/material";
import "./Products.css";
import axios from "axios";

const stylingObject = {
  div: {
    color: "#FFFFFF",
    borderLeft: "1px solid",
  },
};

function Products() {
  const [error, setError] = useState(null);
  const [item, setItem] = useState([]);

  const addItem = (data) => {
    //  console.log("printing input",data);
    axios
      .post(`http://localhost:5000/order_items`, data)
      .then((response) => {
        setItem(response.data.message);
        console.log("Item added");
      })
      .catch((error) => {
        setError("Error in adding new item");
      });
  };

  return (
    <div className="product-grid" style={stylingObject.div}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          <Card className="item1" onClick={addItem}>
            <CardMedia
              component="img"
              height="150"
              image="https://images.pexels.com/photos/11216397/pexels-photo-11216397.jpeg"
              alt="Haworthia Cooperi"
            />
            <i>Haworthia cooperi</i>
            <h5>RM6.00</h5>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="item2">
            <CardMedia
              component="img"
              height="150"
              image="https://images.pexels.com/photos/6839872/pexels-photo-6839872.jpeg"
              alt="Echeveria agavoides"
            />
            <i>Echeveria agavoides</i>
            <h5>RM6.00</h5>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="item3">
            <CardMedia
              component="img"
              height="150"
              image="https://images.pexels.com/photos/1445418/pexels-photo-1445418.jpeg"
              alt="Aloe humilis"
            />
            <i>Aloe humilis</i>
            <h5>RM5.00</h5>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="item4">
            <CardMedia
              component="img"
              height="150"
              image="https://images.pexels.com/photos/2132753/pexels-photo-2132753.jpeg"
              alt="Rebutia"
            />
            <i>Rebutia</i>
            <h5>RM5.00</h5>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
