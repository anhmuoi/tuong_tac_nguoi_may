import { AccountCircle, EmojiEvents, Forum, Home, MenuOpen, People, Reorder, Search, Work } from '@mui/icons-material';
import { InputAdornment, Menu, TextField } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import './Navbar.scss';

const dataPage = [
    {
        icon: <Home color="#2b2b2b" />,
        text: 'Home',
    },
    {
        icon: <Work color="#2b2b2b" />,
        text: 'Jobs',
    },
    {
        icon: <EmojiEvents color="#2b2b2b" />,
        text: 'LeaderBroad',
    },
    {
        icon: <People color="#2b2b2b" />,
        text: 'Connection',
    },
    {
        icon: <Forum color="#2b2b2b" />,
        text: 'Message',
    },
    {
        icon: <AccountCircle color="#2b2b2b" />,
        text: 'Me',
    },
];

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div className="nav__logo">
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
                        <div className="nav__item" key={key}>
                            <div className="nav__icon">{item.icon}</div>
                            <div className="nav__text">{item.text}</div>
                        </div>
                    ))}
                </div>

                <div className="nav__menu">
                    <Reorder/>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Navbar;
