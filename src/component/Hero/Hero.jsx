import React from 'react';
import './Hero.scss';
function Hero({ data }) {
    return (
        <div className="hero">
            <img src={data} alt=""></img>
        </div>
    );
}

export default Hero;
