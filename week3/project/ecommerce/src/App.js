import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;