import React from 'react';
import { Outlet } from 'react-router-dom';
import CoverProfile from '../../component/CoverProfile/CoverProfile.jsx';
import Email from '../../component/Email/Email.jsx';
import './Profile.scss';

function Profile() {
    return (
        <div className="profile">
            <div>
                <CoverProfile name={'Ranbir kapoor'} />
            </div>
              
            <Outlet></Outlet>
        </div>
    );
}

export default Profile;
