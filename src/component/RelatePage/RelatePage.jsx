import React from "react";
import "./RelatePage.scss";
import relate from "../../assets/Images/relate.png";

function RelatePage() {
    return (
        <div className="relate">
            <div className="relate__heading">Related Pages </div>
            <div className="relate__content">
                <img className="relate__img" src={relate} alt="" />
                <div className="relate__text1">Henry harvin</div>
                <div className="relate__text2">20 follower</div>
                <button className="relate__btn">Follow</button>
            </div>
        </div>
    );
}

export default RelatePage;
