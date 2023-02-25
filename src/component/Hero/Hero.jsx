import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

function Hero({ data }) {
    const navigate = useNavigate();

    return (
        <div className="hero" onClick={() => navigate("/detail-course")}>
            <img src={data} alt=""></img>
        </div>
    );
}

export default Hero;
