import React from "react";
import "./Recommend.scss";
import avt from "../../assets/Images/rcm.png";
import { KeyboardArrowRight, PersonAddAlt1 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const data = [{ index: 10 }, { index: 5 }, { index: 15 }];

function Recommend() {
    const navigate = useNavigate();
    return (
        <div className="recommend">
            <div className="recommend__heading">Recommended Pages</div>
            <div className="recommend__body">
                {data.map((item, key) => (
                    <div className="recommend__item" key={key}>
                        <div
                            className="recommend__avatar"
                            onClick={() =>
                                navigate("page/Nareshtihal#otherPage")
                            }
                        >
                            <img src={avt} alt=""></img>
                        </div>
                        <div
                            className="recommend__info"
                            onClick={() =>
                                navigate("page/Nareshtihal#otherPage")
                            }
                        >
                            <div className="recommend__name">Naresh tihal</div>
                            <div className="recommend__connect">
                                <div className="recommend__text">
                                    {item.index} Followers
                                </div>
                            </div>
                        </div>
                        <div className="recommend__follow">Follow</div>
                    </div>
                ))}
            </div>
            <div className="recommend__view">
                <div>View all</div>
                <KeyboardArrowRight />
            </div>
        </div>
    );
}

export default Recommend;
