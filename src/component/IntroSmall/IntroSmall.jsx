import React from "react";
import "./IntroSmall.scss";
import { useNavigate } from "react-router-dom";

function IntroSmall({ data }) {
    const navigate = useNavigate();

    return (
        <div className="introSmall" onClick={() => navigate("/detail-course")}>
            <img src={data} alt=""></img>
        </div>
    );
}

export default IntroSmall;
