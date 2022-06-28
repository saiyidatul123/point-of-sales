import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Box,
  Modal,
} from "@mui/material";
import Transaction from "./Transaction";

const stylingObject = {
  cartButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  popup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "25px",
    boxShadow: 24,
    p: 4,
  },
  popupButton: {
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
};

function Cart() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none" }}>Subtotal</TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none" }}>No. of items</TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none" }}>Tax</TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Service charge</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ borderBottom: "none" }}>Total</TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
        <TableCell style={{ borderBottom: "none" }}></TableCell>
      </TableRow>

      <div style={stylingObject.cartButton}>
        <Button variant="contained">Cancel</Button>
        <Button color="success" variant="contained" onClick={handleOpen}>
          Checkout
        </Button>
      </div>

      {/* Popup Window */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylingObject.popup}>
          <Transaction />
          <div style={stylingObject.popupButton}>
          <Button variant="contained" onClick={handleClose}>Close</Button>
          <Button color="success" variant="contained">
            Submit
          </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Cart;
