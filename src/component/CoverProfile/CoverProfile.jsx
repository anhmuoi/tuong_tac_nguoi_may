import { Add, Block, Chat, PersonAddAlt1 } from '@mui/icons-material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgCover from '../../assets/Images/bg-cover.png';
import imgProfile from '../../assets/Images/profile.png';
import './CoverProfile.scss';
function CoverProfile({ name }) {
    const navigate = useNavigate();
    return (
        <div className="cover" style={{ backgroundImage: `url(${imgCover})` }}>
            <div className="cover__big">
                <div className="cover__logo">
                    <img alt="" src={imgProfile} />
                </div>
                <div className="cover__name">{name}</div>
                <div className="cover__info">
                    <div>Connections 999</div>
                    <div>Followers 971</div>
                    <div>Following 32945</div>
                </div>
            </div>
            <div className="cover__action">
                <div className="cover__action-left">
                    <div onClick={() => navigate(`/profile/${name}`)}>
                        <a>Profile</a>
                    </div>
                    <div onClick={() => navigate(`/profile/${name}/about`)}>
                        <a>About</a>
                    </div>
                    <div onClick={() => navigate(`/profile/${name}/connection`)}>
                        <a>Connections</a>
                    </div>
                    <div onClick={() => navigate(`/profile/${name}/page`)}>
                        <a>Pages</a>
                    </div>
                </div>
                <div className="cover__action-right">
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
                </div>
            </div>
        </div>
    );
}

export default CoverProfile;
