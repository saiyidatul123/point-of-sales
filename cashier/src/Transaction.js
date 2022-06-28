import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

function Transaction() {
  return (
    <div>
      <TableRow>
        <TableCell style={{ borderBottom: "none", width: "300px" }}>
          Total Paid Amount
        </TableCell>
        <TableCell>RM0.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none", width: "300px" }}>
          Total
        </TableCell>
        <TableCell>RM0.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none", width: "300px" }}>
          Payment Method
        </TableCell>
        <TableCell>
          <select>
            <option>Cash</option>
            <option>Debit Card</option>
            <option>Credit Card</option>
          </select>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none", width: "300px" }}>
          Change
        </TableCell>
        <TableCell>RM0.00</TableCell>
      </TableRow>
    </div>
  );
}

export default Transaction;
