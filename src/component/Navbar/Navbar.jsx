import { AccountCircle, EmojiEvents, Forum, Home, MenuOpen, Notifications, People, Reorder, Search, Work } from '@mui/icons-material';
import { Fade, InputAdornment, Menu, Paper, Popper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import './Navbar.scss';
import me from '../../assets/Images/me.png';
import mess1 from '../../assets/Images/mess1.png';

const dataPage = [
    {
        id: 1,
        icon: <Home color="#2b2b2b" />,
        text: 'Home',
        route: '/',
    },

    {
        id: 2,
        icon: <EmojiEvents color="#2b2b2b" />,
        text: 'LeaderBroad',
        route: '/leader-board',
    },

    {
        id: 3,
        icon: <Forum color="#2b2b2b" />,
        text: 'Message',
        route: '/message',
    },
    {
        id: 4,
        icon: <Notifications color="#2b2b2b" />,
        text: 'Notification',
        route: '/notification',
    },
    {
        id: 5,
        icon: <img src={me} alt="" style={{ width: 20, height: 20, borderRadius: '50%' }} />,
        text: 'Me',
        route: '/login',
    },
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [openMess, setOpenMess] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);
    const [openNoti, setOpenNoti] = useState(false);

    const handleClickNav = (id, route) => {
        if (id === 3) {
            setOpenMess(!openMess);
            setOpenLogout(false);
            setOpenNoti(false);
        } else if (id === 4) {
            setOpenMess(false);
            setOpenLogout(false);
            setOpenNoti(!openNoti);
        } else if (id === 5) {
            setOpenMess(false);
            setOpenNoti(false);
            setOpenLogout(!openLogout);
        } else {
            navigate(route);
        }
    };
    return (
        <div>
            <div className="nav">
                <div className="nav__logo" onClick={() => navigate('/')}>
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav__search">
                    <TextField
                        fullWidth
                        style={{  backgroundColor: '#EDF1F4' }}
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
                        <div className="nav__item" key={key} onClick={() => handleClickNav(item.id, item.route)}>
                            <div className="nav__icon">{item.icon}</div>
                            <div className={`nav__text ${location.pathname === item.route ? 'active' : ''}`}>{item.text}</div>
                            {item.id === 5 && openLogout ? (
                                <>
                                    <div className="nav__logout">
                                        <div onClick={() => navigate('/profile/me')}>Profile</div>
                                        <div onClick={() => navigate('/login')}>Logout</div>
                                    </div>
                                </>
                            ) : null}
                            {item.id === 3 && openMess ? (
                                <>
                                    <div className="nav__popup">
                                        <div className="nav__popup-header">Recent Messages</div>
                                        <div className="nav__popup-item" onClick={() => navigate('/inbox/nguyenvanA')}>
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>nguyen van A</div>
                                            </div>
                                            <div className="nav__popup-time">19 Feb 1:24 PM</div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            {item.id === 4 && openNoti ? (
                                <>
                                    <div className="nav__popup" style={{ height: 'auto' }}>
                                        <div className="nav__popup-header">Notifications</div>
                                        <div className="nav__popup-item">
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>Nguyen van A just liked your post</div>
                                            </div>
                                            <div className="nav__popup-time">19 Feb 1:24 PM</div>
                                        </div>
                                        <div className="nav__popup-item">
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>Nguyen van B just liked your post</div>
                                            </div>
                                            <div className="nav__popup-time">19 Feb 1:24 PM</div>
                                        </div>
                                        <div className="nav__popup-item">
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>Nguyen van C just liked your post</div>
                                            </div>
                                            <div className="nav__popup-time">19 Feb 1:24 PM</div>
                                        </div>
                                        <div className="nav__popup-item">
                                            <div className="nav__popup-left">
                                                <img src={mess1} alt="" />
                                                <div>Nguyen van D just liked your post</div>
                                            </div>
                                            <div className="nav__popup-time">19 Feb 1:24 PM</div>
                                        </div>
                                        <div className="nav__popup-go">Go to the box -></div>
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
