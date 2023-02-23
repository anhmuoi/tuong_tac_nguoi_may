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
import avt from '../../assets/Images/profile.png';
import javaImg from '../../assets/Images/java.png';

import {
    AccountCircle,
    Article,
    Cabin,
    Create,
    Dns,
    DocumentScanner,
    FileCopy,
    GppBad,
    InsertDriveFile,
    LibraryBooks,
    LiveTv,
    Public,
    Save,
    Snowshoeing,
    Star,
} from '@mui/icons-material';

const dataAction = [
    {
        id: 1,
        icon: <Create></Create>,
        text: 'Question',
    },
    {
        id: 2,
        icon: <LiveTv></LiveTv>,
        text: 'Live Classes',
    },
    {
        id: 3,
        icon: <Article></Article>,
        text: 'Articles',
    },
    {
        id: 4,
        icon: <Save></Save>,
        text: 'Saved',
    },
    {
        id: 5,
        icon: <Star></Star>,
        text: 'Interests',
    },
   
];

const dataPage = [
    {
        id: 1,
        icon: <InsertDriveFile></InsertDriveFile>,
        text: 'My Pages',
    },
    {
        id: 2,
        icon: <FileCopy></FileCopy>,
        text: 'Create a Page',
    },
];
const dataProduct = [
    {
        id: 1,
        icon: <Dns></Dns>,
        text: 'Courses',
    },
];

export default function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <LeftSideBar dataAction={dataAction} dataProduct={dataProduct} dataPage={dataPage} />
                <IntroSmall data={imgIntroLeft} />
            </div>
            <div className="home__center">
                <AddQuestion />
                <Hero data={imgHero} />
                <Course />
                <Post avatar={avt} name="Ranbir kapoor"></Post>
                <PostSecond avatar={javaImg} name="Java The Complete Guide" />
                <Connect />
                <Post avatar={avt} name="Ranbir kapoor"></Post>
                <PostSecond avatar={javaImg} name="Java The Complete Guide" />
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
