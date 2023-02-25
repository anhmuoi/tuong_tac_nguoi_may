import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CoverProfile from '../../component/CoverProfile/CoverProfile.jsx';
import Email from '../../component/Email/Email.jsx';
import './Profile.scss';
import imgCover from '../../assets/Images/bg-cover.png';
import imgProfile from '../../assets/Images/profile.png';
import imgMe from '../../assets/Images/me.png';

function Profile() {
    const location = useLocation();
    
    return (
        <div className="profile">
            <div>
                {location.pathname.split('/')[2] === 'me' ? (
                    <>
                        <CoverProfile isMe imgCover={imgCover} imgProfile={imgMe} name={'Nguyễn Mười'} />
                    </>
                ) : (
                    <>
                        <CoverProfile imgCover={imgCover} imgProfile={imgProfile} name={'Ranbir kapoor'} />
                    </>
                )}
            </div>

            <Outlet></Outlet>
        </div>
    );
}

export default Profile;
