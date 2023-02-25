import {
    Add,
    BarChart,
    Block,
    Category,
    Chat,
    Collections,
    Info,
    Notifications,
    PersonAddAlt1,
    Reviews,
    Subtitles,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imgCover from "../../assets/Images/coverimage.jpg";
import imgProfile from "../../assets/Images/organization_profile.svg";
import AddQuestion from "../../component/AddQuestion/AddQuestion.jsx";
import CoverProfile from "../../component/CoverProfile/CoverProfile.jsx";
import LeftSideBar from "../../component/LeftSideBar/LeftSideBar.jsx";
import "./FanPage.scss";
import otherProfile from "../../assets/Images/rcm.png";
import {
    AccountCircle,
    Article,
    Cabin,
    Create,
    Dns,
    DocumentScanner,
    FileCopy,
    GppBad,
    InsertDriveFile,
    LibraryBooks,
    LiveTv,
    Public,
    Save,
    Snowshoeing,
    Star,
} from "@mui/icons-material";
import Review from "../../component/Review/Review.jsx";
import RelatePage from "../../component/RelatePage/RelatePage.jsx";
import Tip from "../../component/Tip/Tip.jsx";
import FirstCourse from "../../component/FirstCourse/FirstCourse.jsx";
import noPost from "../../assets/Images/no_post.svg";
import otherPageBg from "../../assets/Images/bg-cover.png";
import Course from "../../component/Course/Course.jsx";
import PostSecond from "../../component/PostSecond/PostSecond.jsx";
import Post from "../../component/Post/Post.jsx";

const dataAction = [
    {
        id: 1,
        icon: <Subtitles />,
        text: "Latest Feed",
    },
    {
        id: 2,
        icon: <Article></Article>,
        text: "Articles",
    },
    {
        id: 3,
        icon: <Create></Create>,
        text: "Question",
    },
    {
        id: 4,
        icon: <Category />,
        text: "Products",
    },
    {
        id: 5,
        icon: <Notifications />,
        text: "Notification",
    },
    {
        id: 6,
        icon: <Info />,
        text: "About",
    },
    {
        id: 7,
        icon: <BarChart />,
        text: "Analytics",
    },
    {
        id: 8,
        icon: <Reviews></Reviews>,
        text: "Review",
    },
    {
        id: 9,
        icon: <Collections />,
        text: "Gallery",
    },
];

function FanPage({ name }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOtherPage, setIsOtherPage] = useState(false);

    useEffect(() => {
        if (location.hash === "#otherPage") {
            setIsOtherPage(true);
        }
    }, []);

    return (
        <div className="fanPage">
            <div>
                <CoverProfile
                    isFanPage
                    imgCover={isOtherPage ? otherPageBg : imgCover}
                    imgProfile={isOtherPage ? otherProfile : imgProfile}
                    name={location.pathname.split("/")[2]}
                    follower={12033}
                    member={5}
                />
            </div>
            <div className="fanPage__container">
                <div className="fanPage__left">
                    <LeftSideBar isFanPage dataAction={dataAction} />
                </div>
                <div className="fanPage__center">
                    {isOtherPage ? (
                        <>
                            <Course title="Courses" />
                            <PostSecond
                                avatar={otherProfile}
                                name={location.pathname.split("/")[2]}
                            />
                            <Post
                                avatar={otherProfile}
                                name={location.pathname.split("/")[2]}
                            ></Post>
                        </>
                    ) : (
                        <>
                            <AddQuestion />
                            <Tip />
                            <FirstCourse />
                            <div className="noPost">
                                <div>
                                    <img src={noPost} alt="" />
                                    <div className="noPost__text">
                                        No posts to show
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="fanPage__right">
                    {isOtherPage ? (
                        <>
                            <Review isOtherPage />
                        </>
                    ) : (
                        <>
                            <Review />
                        </>
                    )}
                    <RelatePage />
                </div>
            </div>
        </div>
    );
}

export default FanPage;
