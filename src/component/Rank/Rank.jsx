import { ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./Rank.scss";
import { useNavigate } from "react-router-dom";

function Rank() {
    const navigate = useNavigate();

    return (
        <div className="rank" onClick={() => navigate("/leader-board")}>
            <div className="rank__left">
                <div className="rank__left-text1">Your Interest Rank</div>
                <div className="rank__left-text2">
                    Your Rank in <strong>Business Intelligence</strong>
                </div>
            </div>
            <div className="rank__right">
                <div>21</div>
                <ArrowUpward
                    style={{ width: 20, height: 20, color: "green" }}
                />
            </div>
        </div>
    );
}

export default Rank;
