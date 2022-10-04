import Banner from './Banner'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoriteContext'
import heartRegular from '../assets/heart-regular.svg'
import heartSolid from '../assets/heart-solid.svg'
import useFetchData from './FetchData'

export default function FavProducts() {
    const [products, setProducts] = useState([])
    const [favProducts, setFavProducts] = useState([])
    const urlAllProd = 'https://fakestoreapi.com/products'
    const { error: errorProd, isLoading: isLoadingProd } = useFetchData(
        urlAllProd,
        setProducts,
    )

    let navigate = useNavigate()
    const routeChange = (pathExtension) => {
        let path = `/products/${pathExtension}`
        navigate(path)
    }

    const [favorites, changeFavorite] = useContext(FavoriteContext)


    useEffect(() => {
        setFavProducts(products.filter((p) => favorites.includes(p.id)));
    }, [products])

    return (
        <div>
            <Banner banner={'Favorites'} />

            {favProducts && (
                <ul className="productList">
                    {favProducts.map((product) => {
                        const isFavorite = favorites.includes(product.id)

                        function setFavorite(event) {
                            event.preventDefault()
                            changeFavorite(product.id)
                        }
                        return (
                            <li
                                onClick={() => {
                                    routeChange(product.id)
                                }}
                                className="productCard"
                                key={product.id}
                            >
                                <div className="product">
                                    <img
                                        key={product.title}
                                        className="img"
                                        src={product.image}
                                        alt={product.title}
                                    ></img>
                                    <span className="title">{product.title}</span>
                                    <img
                                        className="likeButton"
                                        src={isFavorite ? heartSolid : heartRegular}
                                        onClick={setFavorite}
                                        alt="fav"
                                    />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
