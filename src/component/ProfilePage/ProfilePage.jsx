import React from "react";
import Email from "../Email/Email.jsx";
import "./ProfilePage.scss";
import earth from "../../assets/Images/earth.png";
import js from "../../assets/Images/js.png";
import { useNavigate } from "react-router-dom";

const data = [
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: js,
        name: "Javascript",
        follow: "32 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: js,
        name: "Javascript",
        follow: "32 followers",
    },
    {
        img: js,
        name: "Javascript",
        follow: "32 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: js,
        name: "Javascript",
        follow: "32 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
    {
        img: earth,
        name: "Earth",
        follow: "12 followers",
    },
];

function ProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="profilePage">
            <div className="profilePage__right">
                <div className="profilePage__heading">My Pages</div>
                <div className="profilePage__content">
                    {data.map((item, key) => (
                        <>
                            <div
                                className="profilePage__item"
                                onClick={() => navigate("/page/Nareshtihal")}
                            >
                                <div className="profilePage__img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="profilePage__name">
                                    {item.name}
                                </div>
                                <div className="profilePage__follow">
                                    {item.follow}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="profilePage__left">
                <Email />
            </div>
        </div>
    );
}

export default ProfilePage;
