import React from "react";
import {
  Grid,
} from "@mui/material";
import "./Layout.css";
import Products from "./Products";
import Cart from "./Cart";

function Layout() {
  return (
    <div className="layout">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          POS Cashier
          <div className="table">
            <Cart/>
          </div>
        </Grid>
        <Grid item xs={6}>
          Products
          <Products/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
