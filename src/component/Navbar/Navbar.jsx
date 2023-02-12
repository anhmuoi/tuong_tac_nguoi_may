import { AccountCircle, EmojiEvents, Forum, Home, MenuOpen, People, Reorder, Search, Work } from '@mui/icons-material';
import { InputAdornment, Menu, TextField } from '@mui/material';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import './Navbar.scss';
import me from '../../assets/Images/me.png';

const dataPage = [
    {
        icon: <Home color="#2b2b2b" />,
        text: 'Home',
        route: '/',
    },
    {
        icon: <Work color="#2b2b2b" />,
        text: 'Jobs',
        route: '/jobs',
    },
    {
        icon: <EmojiEvents color="#2b2b2b" />,
        text: 'LeaderBroad',
        route: '/leader-board',
    },
    {
        icon: <People color="#2b2b2b" />,
        text: 'Connection',
        route: '/connection',
    },
    {
        icon: <Forum color="#2b2b2b" />,
        text: 'Message',
        route: '/message',
    },
    {
        icon: <img src={me} alt="" style={{ width: 20, height: 20, borderRadius: '50%' }} />,
        text: 'Me',
        route: '/me',
    },
];

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <div className="nav">
                <div className="nav__logo" onClick={() => navigate('/')}>
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav__search">
                    <TextField
                        style={{ backgroundColor: '#EDF1F4' }}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search></Search>
                                </InputAdornment>
                            ),
                        }}
                        placeholder="search"
                    ></TextField>
                </div>
                <div className="nav__page">
                    {dataPage.map((item, key) => (
                        <div className="nav__item" key={key} onClick={() => navigate(item.route)}>
                            <div className="nav__icon">{item.icon}</div>
                            <div className={`nav__text ${location.pathname === item.route ? 'active' : ''}`}>{item.text}</div>
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
