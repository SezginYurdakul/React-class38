import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ banner }) => {
    const navigate = useNavigate();

    return (
        <div className="Banner">
            <h1>{banner}</h1>
            <div className="BannerMenu">
                <h1 className="BannerRigth" onClick={() => { navigate('/') }}> Products</h1>
                <h1 className="BannerRigth" onClick={() => { navigate('/favorites') }}> Favorites</h1>
            </div>
        </div>
    )
};
export default Banner;