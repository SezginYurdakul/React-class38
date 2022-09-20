import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductList";
import products from "./fake-data/all-products";
import categoryList from "./fake-data/all-categories";

function App() {
  const [filteredProducts, setfilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category.slice(6)
    );
    setSelectedCategory(category);
    setfilteredProducts(filteredProducts);
  };

  return (
    <div className=" App">
      <div className="Banner"><h1>Products</h1> </div>
      <Navbar
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        selectCategory={selectCategory}
      />
      <ProductsList products={filteredProducts} />
    </div>
  );
}

export default App;