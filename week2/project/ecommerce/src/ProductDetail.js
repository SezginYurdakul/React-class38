import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "./components/FetchData";


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const url_item = `https://fakestoreapi.com/products/${id}`;
    const { isLoading, error } = useFetchData(url_item, setProduct);

    if (isLoading) return (<h3 className="loading">Product details is loading ..</h3>);
    if (error) return (<h3 className="error">Can NOT find Product. Error: ${error}</h3>);

    return (

        <div className="App">
            <h1>{product.title}</h1>
            <div className="product-details">
                <h2 className="price">{`Price: ${product.price} $`}</h2>
                <img className="product-image" src={product.image} alt={product.title} />
                <ul className="product-description">
                    <li >{`Product Discription:${product.description}`}</li>
                </ul>
                <Link className="home-button" to="/"> Home Page </Link>
            </div>
        </div>
    )
};

export default ProductDetails;

