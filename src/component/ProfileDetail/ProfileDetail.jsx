import React from 'react';
import AboutDetail from '../AboutDetail/AboutDetail.jsx';
import Connect from '../Connect/Connect.jsx';
import Email from '../Email/Email.jsx';
import People from '../People/People.jsx';
import Post from '../Post/Post.jsx';
import PostSecond from '../PostSecond/PostSecond.jsx';
import './ProfileDetail.scss';
import avt from '../../assets/Images/profile.png';
import javaImg from '../../assets/Images/java.png';
import { useLocation, useNavigate } from 'react-router-dom';
import imgMe from '../../assets/Images/me.png';

function ProfileDetail() {
    const location = useLocation();
   const navigation = useNavigate()
    return (
        <div className="profileDetail">
            <div className="profileDetail__left">
                <AboutDetail />
                <People isConnect={true} />
            </div>
            <div className="profileDetail__center">
                {location.pathname.split('/')[2] === 'me' ? (
                    <>
                        <Post avatar={imgMe} name="Nguyễn Mười"></Post>
                        <PostSecond avatar={imgMe} name="Nguyễn Mười" />
                        <Post avatar={imgMe} name="Nguyễn Mười"></Post>
                    </>
                ) : (
                    <>
                        <Post avatar={avt} name="Ranbir kapoor"></Post>
                        <PostSecond avatar={javaImg} name="Java The Complete Guide" />
                        <Post avatar={avt} name="Ranbir kapoor"></Post>
                    </>
                )}
            </div>
            <div className="profileDetail__right">
                <Email />
            </div>
        </div>
    );
}

export default ProfileDetail;
