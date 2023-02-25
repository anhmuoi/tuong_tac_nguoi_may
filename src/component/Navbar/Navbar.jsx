import {
    AccountCircle,
    EmojiEvents,
    Forum,
    Notifications,
    Home,
    MenuOpen,
    People,
    Reorder,
    Search,
    Work,
} from "@mui/icons-material";
import {
    Fade,
    InputAdornment,
    Menu,
    Paper,
    Popper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
import "./Navbar.scss";
import me from "../../assets/Images/me.png";
import mess1 from "../../assets/Images/mess1.png";

const dataPage = [
    {
        id: 1,
        icon: <Home color="#2b2b2b" />,
        text: "Home",
        route: "/",
    },

    {
        id: 2,
        icon: <EmojiEvents color="#2b2b2b" />,
        text: "LeaderBroad",
        route: "/leader-board",
    },
    {
        id: 5,
        icon: <Notifications color="#2b2b2b" />,
        text: "Notifications",
    },
    {
        id: 3,
        icon: <Forum color="#2b2b2b" />,
        text: "Message",
        route: "/message",
    },
    {
        id: 4,
        icon: (
            <img
                src={me}
                alt=""
                style={{ width: 20, height: 20, borderRadius: "50%" }}
            />
        ),
        text: "Me",
        route: "/login",
    },
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [read, setRead] = useState(false);
    const [openMess, setOpenMess] = useState(false);
    const [openNoti, setOpenNoti] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);

    const handleClickNav = (id, route) => {
        if (id === 3) {
            setOpenMess(!openMess);
            setOpenLogout(false);
            setOpenNoti(false);
        } else if (id === 4) {
            setOpenMess(false);
            setOpenLogout(!openLogout);
            setOpenNoti(false);
        } else if (id === 5) {
            setOpenNoti(!openNoti);
            setOpenMess(false);
            setOpenLogout(false);
        } else {
            navigate(route);
        }
    };

    const handleRead = () => {
        setRead(true);
    };

    return (
        <div>
            <div className="nav">
                <div className="nav__logo" onClick={() => navigate("/")}>
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav__search">
                    <TextField
                        style={{ backgroundColor: "#EDF1F4", width: "100%" }}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search></Search>
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Search"
                    ></TextField>
                </div>
                <div className="nav__page">
                    {dataPage.map((item, key) => (
                        <div
                            className="nav__item"
                            key={key}
                            onClick={() => handleClickNav(item.id, item.route)}
                        >
                            <div className="nav__icon">{item.icon}</div>
                            <div
                                className={`nav__text ${
                                    location.pathname === item.route
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {item.text}
                            </div>
                            {item.id === 4 && openLogout ? (
                                <>
                                    <div className="nav__logout">
                                        <div
                                            onClick={() =>
                                                navigate("/profile/me")
                                            }
                                        >
                                            Profile
                                        </div>
                                        <div onClick={() => navigate("/login")}>
                                            Logout
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            {item.id === 3 && openMess ? (
                                <>
                                    <div className="nav__popup">
                                        <div className="nav__popup-header">
                                            Recent Messages
                                        </div>
                                        <div
                                            className="nav__popup-item"
                                            onClick={() =>
                                                navigate("/inbox/nguyenvanA")
                                            }
                                        >
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>nguyen van A</div>
                                            </div>
                                            <div className="nav__popup-time">
                                                19 Feb 1:24 PM
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            {item.id === 5 && openNoti ? (
                                <>
                                    <div className="nav__popup">
                                        <div className="nav__popup-header">
                                            Recent Notifications
                                            <span>See All</span>
                                        </div>
                                        <div
                                            className="nav__popup-item"
                                            onClick={() => handleRead()}
                                        >
                                            <div className="nav__popup-notileft">
                                                <img src={mess1} alt="" />
                                                <div
                                                    style={{
                                                        color: read
                                                            ? "grey"
                                                            : "black",
                                                    }}
                                                >
                                                    <span> nguyen van A</span>{" "}
                                                    just replied to one of your
                                                    posts
                                                </div>
                                            </div>
                                            <div className="nav__popup-time">
                                                19 Feb 1:24 PM
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    ))}
                </div>

                <div className="nav__menu">
                    <Reorder />
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Navbar;
