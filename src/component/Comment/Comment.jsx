import React from "react";
import "./Comment.scss";
import imgStar from "../../assets/Images/star-filled.svg";
import cmt1 from "../../assets/Images/cmt1.png";
import cmt2 from "../../assets/Images/cmt2.png";
import star from "../../assets/Images/star.svg";

function Comment() {
    return (
        <div className="cmt">
            <div className="cmt__heading">Reviews and Ratings</div>
            <div className="cmt__body">
                <div className="cmt__totalRate">
                    <div className="cmt__totalRate-num">
                        <div className="cmt__totalRate-num-text1">5.0</div>
                        <div className="cmt__totalRate-num-text2">2 rating</div>
                        <div className="cmt__totalRate-num-star">
                            <img src={imgStar} alt="" />
                            <img src={imgStar} alt="" />
                            <img src={imgStar} alt="" />
                            <img src={imgStar} alt="" />
                            <img src={imgStar} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cmt__percent">
                    <div className="cmt__rate">
                        <div className="cmt__star">
                            5{" "}
                            <img
                                src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg"
                                alt="study24x7"
                            />
                        </div>
                        <div className="cmt__line">
                            <div className="cmt__line-wrapper">
                                <div
                                    className="skills html"
                                    style={{
                                        width: "100%",
                                        background: "#f05050",
                                    }}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="cmt__ratingCount">2.0</div>
                    </div>
                    <div className="cmt__rate">
                        <div className="cmt__star">
                            4{" "}
                            <img
                                src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg"
                                alt="study24x7"
                            />
                        </div>
                        <div className="cmt__line">
                            <div className="cmt__line-wrapper">
                                <div
                                    className="skills html"
                                    style={{ width: "80%" }}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="cmt__ratingCount">0.0</div>
                    </div>
                    <div className="cmt__rate">
                        <div className="cmt__star">
                            3{" "}
                            <img
                                src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg"
                                alt="study24x7"
                            />
                        </div>
                        <div className="cmt__line">
                            <div className="cmt__line-wrapper">
                                <div
                                    className="skills html"
                                    style={{ width: "80%" }}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="cmt__ratingCount">0.0</div>
                    </div>
                    <div className="cmt__rate">
                        <div className="cmt__star">
                            2{" "}
                            <img
                                src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg"
                                alt="study24x7"
                            />
                        </div>
                        <div className="cmt__line">
                            <div className="cmt__line-wrapper">
                                <div
                                    className="skills html"
                                    style={{ width: "80%" }}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="cmt__ratingCount">0.0</div>
                    </div>
                    <div className="cmt__rate">
                        <div className="cmt__star">
                            1{" "}
                            <img
                                src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg"
                                alt="study24x7"
                            />
                        </div>
                        <div className="cmt__line">
                            <div className="cmt__line-wrapper">
                                <div
                                    className="skills html"
                                    style={{ width: "80%" }}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="cmt__ratingCount">0.0</div>
                    </div>
                </div>
            </div>

            <div className="cmt__review">
                <div className="cmt__review-left">
                    <img className="cmt__review-avt" src={cmt1} alt="" />
                    <div className="cmt__review-info">
                        <div className="cmt__review-name">Srishti Singh</div>
                        <div className="cmt__review-time">
                            16 Nov 2022 7:13 PM
                        </div>
                    </div>
                </div>
                <div className="cmt__review-right">
                    <div className="cmt__review-star">
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                    </div>
                    <div className="cmt__review-text">Excellent!</div>
                </div>
            </div>
            <div className="cmt__review">
                <div className="cmt__review-left">
                    <img className="cmt__review-avt" src={cmt2} alt="" />
                    <div className="cmt__review-info">
                        <div className="cmt__review-name">Harmeet singh</div>
                        <div className="cmt__review-time">
                            15 Nov 2022 12:50 PM
                        </div>
                    </div>
                </div>
                <div className="cmt__review-right">
                    <div className="cmt__review-star">
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                        <img src={imgStar} alt="" />
                    </div>
                    <div className="cmt__review-text">Great!</div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
