import React from 'react';
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar.jsx';
import './Home.scss';
import imgIntroLeft from '../../assets/Images/reasoning.png';
import IntroSmall from '../../component/IntroSmall/IntroSmall.jsx';
import AddQuestion from '../../component/AddQuestion/AddQuestion.jsx';
import Hero from '../../component/Hero/Hero.jsx';
import imgHero from '../../assets/Images/hero.png';
import Course from '../../component/Course/Course.jsx';
import Post from '../../component/Post/Post.jsx';
import PostSecond from '../../component/PostSecond/PostSecond.jsx';
import Connect from '../../component/Connect/Connect.jsx';
import Rank from '../../component/Rank/Rank.jsx';
import inTroRight from '../../assets/Images/satInner.png';
import People from '../../component/People/People.jsx';
import Recommend from '../../component/Recommend/Recommend.jsx';
import Email from '../../component/Email/Email.jsx';

export default function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <LeftSideBar />
                <IntroSmall data={imgIntroLeft} />
            </div>
            <div className="home__center">
                <AddQuestion />
                <Hero data={imgHero} />
                <Course />
                <Post></Post>
                <PostSecond />
                <Connect />
                <Post></Post>
                <PostSecond />
            </div>
            <div className="home__right">
                <Rank />
                <IntroSmall data={inTroRight} />
                <People />
                <Recommend />
                <Email />
            </div>
        </div>
    );
}
