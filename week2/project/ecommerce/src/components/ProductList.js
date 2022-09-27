import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsList = ({ products }) => {

  let navigate = useNavigate();
  const routeChange = (pathExtension) => {
    let path = `/products/${pathExtension}`;
    navigate(path);
  }

  return (
    <ul className="productList" >
      {products.map((product) => {
        return (
          <li onClick={() => { routeChange(product.id) }} className="productCard" key={product.id}>
            <div className="product">
              <img key={product.title} className="img" src={product.image} alt={product.title}></img>
              <span className="title">{product.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ProductsList;

