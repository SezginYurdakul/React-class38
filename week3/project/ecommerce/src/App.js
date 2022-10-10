import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetail";
import FavProducts from "./components/FavProducts";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {

  return (
    <FavoriteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<FavProducts />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}

export default App;