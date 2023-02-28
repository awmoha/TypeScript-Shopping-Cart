import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, Button } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs className="bg-dark shadow-sm mb-4">
      <Container>
        <Nav className="">
          <Nav.Link to="/" as={NavLink} style={{ color: "whitesmoke" }}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} style={{ color: "whitesmoke" }}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}style={{ color: "whitesmoke" }}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button variant="outlined" onClick={openCart}>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              style={{ width: "3rem", height: "3rem" }}
            >
              <Badge badgeContent={cartQuantity} color="primary">
                <AddShoppingCart />
              </Badge>
            </IconButton>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
