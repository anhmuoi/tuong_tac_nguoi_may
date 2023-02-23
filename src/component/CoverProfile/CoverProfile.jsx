import { Add, Block, Chat, PersonAddAlt1 } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CoverProfile.scss';
function CoverProfile({ name, isFanPage, imgCover, imgProfile, follower, isMe }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState(0);
    console.log(location.pathname.split('/')[3]);

    useEffect(() => {
        if (location.pathname.split('/')[3] === undefined) {
            setPath(0);
        } else if (location.pathname.split('/')[3] === 'about') {
            setPath(1);
        } else if (location.pathname.split('/')[3] === 'connection') {
            setPath(2);
        } else if (location.pathname.split('/')[3] === 'page') {
            setPath(3);
        } else {
            setPath(0);
        }
    }, [location.pathname]);
    return (
        <div className="cover" style={{ backgroundImage: `url(${imgCover})` }}>
            <div className="cover__big">
                <div className="cover__logo">
                    <img alt="" src={imgProfile} />
                </div>
                <div className="cover__name">{name}</div>
                <div className="cover__info">
                    {isFanPage ? (
                        <></>
                    ) : (
                        <>
                            <div>Connections 999</div>
                            <div>Followers 971</div>
                            <div>Following 32945</div>
                        </>
                    )}
                </div>
            </div>
            <div className="cover__action">
                <div className="cover__action-left">
                    {isFanPage ? (
                        <div>{follower ? follower : '0'} Follower</div>
                    ) : (
                        <>
                            {isMe ? (
                                <>
                                    <div className={`${path === 0 ? 'active' : ''}`} onClick={() => navigate(`/profile/me`)}>
                                        <a>Profile</a>
                                    </div>
                                    <div className={`${path === 1 ? 'active' : ''}`} onClick={() => navigate(`/profile/me/about`)}>
                                        <a>About</a>
                                    </div>
                                    <div className={`${path === 2 ? 'active' : ''}`} onClick={() => navigate(`/profile/me/connection`)}>
                                        <a>Connections</a>
                                    </div>
                                    <div className={`${path === 3 ? 'active' : ''}`} onClick={() => navigate(`/profile/me/page`)}>
                                        <a>Pages</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`${path === 0 ? 'active' : ''}`} onClick={() => navigate(`/profile/${name}`)}>
                                        <a>Profile</a>
                                    </div>
                                    <div className={`${path === 1 ? 'active' : ''}`} onClick={() => navigate(`/profile/${name}/about`)}>
                                        <a>About</a>
                                    </div>
                                    <div className={`${path === 2 ? 'active' : ''}`} onClick={() => navigate(`/profile/${name}/connection`)}>
                                        <a>Connections</a>
                                    </div>
                                    <div className={`${path === 3 ? 'active' : ''}`} onClick={() => navigate(`/profile/${name}/page`)}>
                                        <a>Pages</a>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className="cover__action-right">
                    {isFanPage ? (
                        <></>
                    ) : (
                        <>
                            <div className="cover__connect">
                                <PersonAddAlt1 />
                                <div>Connect</div>
                            </div>
                            <div className="cover__connect">
                                <Add />
                                <div>Follow</div>
                            </div>
                            <div className="cover__connect">
                                <Block />
                                <div>Block</div>
                            </div>
                            <div className="cover__connect">
                                <Chat />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoverProfile;
