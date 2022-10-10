import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ banner }) => {
    const navigate = useNavigate();

    return (
        <div className="banner">
            <h1>{banner}</h1>
            <div className="bannerMenu">
                <h1 className="bannerRigth" onClick={() => { navigate('/') }}> Products</h1>
                <h1 className="bannerRigth" onClick={() => { navigate('/favorites') }}> Favorites</h1>
            </div>
        </div>
    )
};
export default Banner;