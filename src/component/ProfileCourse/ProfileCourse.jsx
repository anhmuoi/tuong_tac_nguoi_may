import React from "react";
import Email from "../Email/Email.jsx";
import "./ProfileCourse.scss";
import { useNavigate } from "react-router-dom";
import ListingCourse from "../ListingCourse/ListingCourse.jsx";

function ProfileCourse() {
    const navigate = useNavigate();

    return (
        <div className="profilePage">
            <div className="profilePage__right">
                <div className="profilePage__heading">My Courses</div>
                <div className="profilePage__content"></div>
            </div>
            <div className="profilePage__left">
                <Email />
            </div>
        </div>
    );
}

export default ProfileCourse;
