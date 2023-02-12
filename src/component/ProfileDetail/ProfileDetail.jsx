import React from 'react';
import AboutDetail from '../AboutDetail/AboutDetail.jsx';
import Connect from '../Connect/Connect.jsx';
import Email from '../Email/Email.jsx';
import People from '../People/People.jsx';
import Post from '../Post/Post.jsx';
import PostSecond from '../PostSecond/PostSecond.jsx';
import './ProfileDetail.scss';

function ProfileDetail() {
    return (
        <div className="profileDetail">
            <div className="profileDetail__left">
                <AboutDetail />
                <People isConnect={true} />
            </div>
            <div className="profileDetail__center">
                <Post />
                <PostSecond />
                <Post />
            </div>
            <div className="profileDetail__right">
                <Email />
            </div>
        </div>
    );
}

export default ProfileDetail;
