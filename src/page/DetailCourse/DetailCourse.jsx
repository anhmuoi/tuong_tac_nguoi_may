import React from "react";
import avt from "../../assets/Images/rcm.png";
import "./DetailCourse.scss";
import fb from "../../assets/Images/facebook.svg";
import ws from "../../assets/Images/whatsapp.png";
import tele from "../../assets/Images/telegram.jpg";
import tw from "../../assets/Images/twiter.svg";
import linkIn from "../../assets/Images/linkedin_circle.png";
import Enroll from "../../component/Enroll/Enroll.jsx";
import InfoCourse from "../../component/InfoCourse/InfoCourse.jsx";
import Program from "../../component/Program/Program.jsx";
import Comment from "../../component/Comment/Comment.jsx";
import authAvt from "../../assets/Images/profile.png";
import { useNavigate } from "react-router-dom";

const dataSocial = [
    {
        id: 1,
        img: fb,
        name: "Facebook",
    },
    {
        id: 2,
        img: ws,
        name: "Whatsapp",
    },
    {
        id: 3,
        img: tele,
        name: "Telegram",
    },
    {
        id: 4,
        img: tw,
        name: "Twitter",
    },
    {
        id: 5,
        img: linkIn,
        name: "LinkedIn",
    },
];

function DetailCourse() {
    const navigate = useNavigate();

    return (
        <div className="detail">
            <div className="detail__left">
                <div className="detail__left-auth">Author</div>
                <div
                    className="detail__left-page"
                    onClick={() => navigate("/profile/Ranbirkapoor")}
                >
                    <div className="detail__left-avatar">
                        <img src={authAvt} alt="" />
                    </div>
                    <div className="detail__left-content">
                        <div className="detail__left-name">Henry Harvin</div>
                    </div>
                </div>

                <div className="detail__left-auth">Course Page</div>
                <div
                    className="detail__left-page"
                    onClick={() => navigate("/page/Nareshtihal")}
                >
                    <div className="detail__left-avatar">
                        <img src={avt} alt="" />
                    </div>
                    <div className="detail__left-content">
                        <div className="detail__left-name">Henry Harvin</div>
                        <div className="detail__left-follow">15 followers</div>
                    </div>
                </div>
            </div>
            <div className="detail__center">
                <Enroll />
                <InfoCourse />
                <Program />
                <Comment />
            </div>
            <div className="detail__right">
                <div className="detail__share">
                    <div className="detail__left-name">Share this Course</div>
                    <div className="detail__left-follow">
                        Tell your friends about this Course, so they too can get
                        benefits
                    </div>
                    <div className="detail__share-content">
                        {dataSocial.map((item) => (
                            <>
                                <div
                                    className="detail__share-item"
                                    key={item.id}
                                >
                                    <img src={item.img} alt=""></img>
                                    <div className="detail__left-follow">
                                        {item.name}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCourse;
