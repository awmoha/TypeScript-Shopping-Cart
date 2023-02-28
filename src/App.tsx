import React from "react";
import logo from "./logo.svg";
import Box from "@mui/material/Box";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./pages/Footer";
function App() {
  return (
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
  );
}

export default App;
