import React, { useState } from "react";
import useFetchData from "./FetchData";
import Navbar from "./Navbar";
import Banner from "./Banner";
import ProductsList from "./ProductList";


const Home = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const banner = "Products"
    const urlCat = "https://fakestoreapi.com/products/categories";
    const urlProd = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    const urlAllProd = "https://fakestoreapi.com/products";


    function selectUrl(isCategory) {
        if (isCategory) {
            return urlProd;
        } else { return urlAllProd }
    }

    const { error: errorProd, isLoading: isLoadingProd } = useFetchData(selectUrl(selectedCategory), setProducts);
    const { error: errorCat, isLoading: isLoadingCat } = useFetchData(urlCat, setCategoryList);

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setProducts(products);
    };

    return (
        <div className=" App">
            <Banner banner={banner} />
            {isLoadingCat ? (<h3 className="loading">Category List is Loading ..</h3>)
                : errorCat ? (<h3 className="error">Something about API Link. Error : {errorCat}</h3>)
                    : (<Navbar categoryList={categoryList} selectedCategory={selectedCategory} clickHandler={selectCategory} />)}
            {isLoadingProd ? (<h3 className="loading">Product List is loading ..</h3>)
                : errorProd ? (<h3 className="error">{errorProd}</h3>)
                    : (<ProductsList products={products} />)}
        </div>
    );
};

export default Home;
