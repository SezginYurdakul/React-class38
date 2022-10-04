import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchData from "./FetchData";
import { FavoriteContext } from "../context/FavoriteContext";
import heartRegular from "../assets/heart-regular.svg"
import heartSolid from "../assets/heart-solid.svg"


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const url_item = `https://fakestoreapi.com/products/${id}`;
    const { isLoading, error } = useFetchData(url_item, setProduct);

    const [favorites, changeFavorite] = useContext(FavoriteContext);
    const isFavorite = favorites.includes(product.id);

    const setFavorite = () => {
        changeFavorite(product.id)
    }

    if (isLoading) return (<h3 className="loading">Product details is loading ..</h3>);
    if (error) return (<h3 className="error">Can NOT find Product. Error: ${error}</h3>);
    return (

        <div className="App">
            <h1>{product.title}</h1>
            <div className="product-details">
                <h2 className="price">{`Price: ${product.price} $`}</h2>
                <img className="product-image" src={product.image} alt={product.title} />
                <img className="likeButtonDetails" src={isFavorite ? heartSolid : heartRegular} onClick={setFavorite} alt="fav" />
                <ul className="product-description">
                    <li >{`Product Discription:${product.description}`}</li>
                </ul>
                <br>
                </br>
                <div className='homepage-button'><Link className="home-button" to="/"> Home Page </Link></div>
            </div>
        </div>
    )
};

export default ProductDetails;

