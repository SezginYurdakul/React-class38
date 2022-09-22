import React from "react";
import Product from "./Product";
const ProductsList = ({ products }) => {
  return (
    <ul className="productList" >
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product} />
        );
      })}
    </ul>
  );
};
export default ProductsList;
