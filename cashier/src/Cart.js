import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";



function Cart() {
  return (
    <div>
      <TableHead>
        <TableRow>
          <TableCell style={{ color: "#FFFFFF" }}>Product</TableCell>
          <TableCell style={{ color: "#FFFFFF" }}>Price(RM)</TableCell>
          <TableCell style={{ color: "#FFFFFF" }}>Quantity</TableCell>
          <TableCell style={{ color: "#FFFFFF" }}>Cost(RM)</TableCell>
        </TableRow>
      </TableHead>
    </div>
  );
}

export default Cart;
