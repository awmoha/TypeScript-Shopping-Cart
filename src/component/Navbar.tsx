import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, Button } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button variant="outlined">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            style={{ width: "3rem", height: "3rem" }}
          >
            <Badge badgeContent={4} color="primary">
              <AddShoppingCart />
            </Badge>
          </IconButton>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
