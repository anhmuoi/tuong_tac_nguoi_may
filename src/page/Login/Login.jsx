import { Close, Facebook, Google, Instagram, LinkedIn, Reorder, Search, Twitter } from '@mui/icons-material';
import { Button, Card, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import login1 from '../../assets/Images/login1.svg';
import login2 from '../../assets/Images/login2.svg';
import login3 from '../../assets/Images/login3.svg';
import './Login.scss';
import st1 from '../../assets/Images/st1.png';
import st2 from '../../assets/Images/st2.png';
import st3 from '../../assets/Images/st3.png';
import lgStep from '../../assets/Images/lgBg.png';
import exp1 from '../../assets/Images/exp1.png';
import exp2 from '../../assets/Images/exp2.png';
import exp3 from '../../assets/Images/exp3.png';
import exp4 from '../../assets/Images/exp4.png';
import new1 from '../../assets/Images/new1.png';
import new2 from '../../assets/Images/new2.png';
import new3 from '../../assets/Images/new3.png';
import new4 from '../../assets/Images/new4.png';
import lgFooter from '../../assets/Images/lgFooter.svg';
import { useSnackbar } from 'notistack';

const data = [
    {
        id: 1,
        img: login1,
        number: 3000,
        desc: 'Schools/Colleges & Universities',
    },
    {
        id: 2,
        img: login2,
        number: 90000,
        desc: 'Learners & Educators',
    },
    {
        id: 3,
        img: login3,
        number: 40000,
        desc: 'Student Assessed For Career Counselling',
    },
];

const dataExplore = [
    {
        id: 1,
        img: exp1,
        name1: 'Learn',
        name2: 'Design',
    },
    {
        id: 2,
        img: exp2,
        name1: 'Learn',
        name2: 'Digital Marketing',
    },
    {
        id: 3,
        img: exp3,
        name1: 'Learn',
        name2: 'Coding',
    },
    {
        id: 4,
        img: exp4,
        name1: 'Learn',
        name2: 'office information',
    },
];

const dataCommunity = [
    {
        id: 1,
        title: 'Students',
        desc: 'My situation was well understood by the counselor. She went over everything I needed to know about studying abroad in great detail with me. Thank you so much, Study; I appreciate it greatly.',
    },

    {
        id: 2,
        title: 'Educators',
        desc: 'Our online sessions are intended to improve student learning and participation with teachers. This is due in large part to the most recent social learning network model, which ensures both conceptual understanding and social interaction.',
    },
    {
        id: 3,
        title: 'Parents',
        desc: "The session opened doors of opportunity for all of us and our children. The counselor was fantastic and provided excellent advice. I'm coming back as a better parent. Thank you so much, everyone.",
    },
    {
        id: 4,
        title: 'Universities',
        desc: "We has always been one of our most reliable partners. They provide excellent assistance, which I greatly appreciate. It's one of the best in India and the best go-to option in India for students; I strongly recommend us.",
    },
];

const dataNews = [
    {
        id: 1,
        img: new1,
    },
    {
        id: 2,
        img: new2,
    },
    {
        id: 3,
        img: new3,
    },
    {
        id: 4,
        img: new4,
    },
];

function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [agree, setAgree] = useState(false);
    const [idCommunity, setIdCommunity] = useState(1);
    const location = useLocation();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClickSignup = () => {
        setIsLogin(false);
    };

    const handleClickLogin = () => {
        setIsLogin(true);
        setAgree(false);
    };
    const onSignUp = () => {
        if (agree) {
            navigate('/');
            enqueueSnackbar('Sign Up Successfully', {
                variant: 'success',
                action: (key) => (
                    <Button onClick={() => dismissNotification(key)} color="inherit">
                        <Close />
                    </Button>
                ),
            });
        }
    };

    const dismissNotification = (key) => {
        closeSnackbar(key);
    };
    const handleChangeCommunity = (id) => {
        setIdCommunity(id);
    };
    const onLogin = () => {
        navigate('/');
        enqueueSnackbar('Login Successfully', {
            variant: 'success',
            action: (key) => (
                <Button onClick={() => dismissNotification(key)} color="inherit">
                    <Close />
                </Button>
            ),
        });
    };

    return (
        <div className="login">
            <div className="nav">
                <div className="nav__logo" onClick={() => navigate('/')}>
                    <img src={logo} alt=""></img>
                </div>

                <div className="nav__page"></div>
                <div className="nav__auth">
                    <div className={`nav__signUp ${isLogin ? '' : 'active'}`} onClick={() => handleClickSignup()}>
                        Sign Up
                    </div>
                    <div className={`nav__login ${isLogin ? 'active' : ''}`} onClick={() => handleClickLogin()}>
                        login
                    </div>
                </div>
            </div>

            <div className="login__container">
                <div className="login__left">
                    <div className="login__heading">Social Learning Network</div>
                    <div className="login__desc">
                        To offer accessible education, a community where students can interact with peers/mentors for knowledge sharing, and to assist
                        students in finding the suitable career and employment.
                    </div>
                    <div className="login__info">
                        {data.map((item) => (
                            <div key={item.id} className="login__info-item">
                                <img src={item.img} alt="" />
                                <div style={{ color: '#f05050', fontWeight: 'bold' }}>{item.number}+</div>
                                <div style={{ fontWeight: '500' }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Card className="login__right">
                    {isLogin ? <div className="login__title">login</div> : <div className="login__title">Sign Up</div>}
                    <div className="login__comment">
                        <div className="login__input">
                            <input type="text" multiple id="input" placeholder="email"></input>
                        </div>
                    </div>
                    <div className="login__comment">
                        <div className="login__input">
                            <input type="password" multiple id="input"></input>
                        </div>
                    </div>
                    {isLogin ? (
                        <>
                            <div className="login__forgot">Forgot Password?</div>

                            <div className="login__btn" onClick={() => onLogin()}>
                                Login
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <input style={{ cursor: 'pointer' }} id="agree" type="checkbox" value={agree} onClick={() => setAgree(!agree)} />
                                <label style={{ cursor: 'pointer' }} htmlFor="agree">
                                    Agree to all our terms
                                </label>
                            </div>
                            <div className={`login__btn ${agree ? '' : 'notActive'}`} onClick={() => onSignUp()}>
                                Sign Up
                            </div>
                        </>
                    )}
                    <div className="login__otherBtn">
                        <div className="login__fb">
                            <Facebook /> Continue With Facebook
                        </div>
                        <div className="login__google">
                            <Google /> Continue With Google
                        </div>
                    </div>
                </Card>
            </div>

            <div className="login__intro">
                <div className="login__course">
                    <img src={st1} alt="" />
                    <img src={st2} alt="" />
                    <img src={st3} alt="" />
                </div>
                <div className="login__ask">Why Study?</div>
                <div className="login__answer">
                    Connecting Educators and Learners, we provide online learning solutions that can assist you in achieving your objectives, whether
                    they involve finding a new interest, upgrading your career, or switching professions.
                </div>
            </div>
            <div className="login__step">
                <img src={lgStep} alt="" />
            </div>
            <div className="login__explore">
                <div className="login__explore-heading">Explore Your Interests</div>
                <div className="login__category">
                    {dataExplore.map((item) => (
                        <>
                            <div className="login__category-item">
                                <img className="login__category-img" src={item.img} alt="" />
                                <div className="login__category-content">
                                    <div className="login__category-name1">{item.name1}</div>
                                    <div className="login__category-name2">{item.name2}</div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="login__community">
                <div className="login__explore-heading">Social Community</div>
                <div className="login__connect">
                    {dataCommunity.map((item) => (
                        <>
                            <div
                                className={`login__connect-item ${idCommunity === item.id ? 'active' : ''}`}
                                onClick={() => handleChangeCommunity(item.id)}
                            >
                                {item.title}
                            </div>
                        </>
                    ))}
                </div>
                {dataCommunity.map((item) => {
                    if (item.id === idCommunity) {
                        return (
                            <>
                                <div className="login__connect-desc">{item.desc}</div>
                            </>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="login__new">
                <div className="login__new-heading">News</div>
                <div className="login__new-content">
                    {dataNews.map((item) => (
                        <>
                            <div className="login__new-item">
                                <img className="login__new-img" src={item.img} alt="" />
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="login__footer">
                <div className="login__top">
                    <img src={lgFooter} alt="" />
                </div>
                <div className="login__body">
                    <div className="login__body-item">
                        <div className="login__body-title"> About Us</div>
                        <div className="login__body-list">
                            <p>Press</p>
                        </div>
                    </div>
                    <div className="login__body-item">
                        <div className="login__body-title"> Services</div>
                        <div className="login__body-list">
                            <p>Educators</p>
                            <p>Course</p>
                            <p>Campus Hiring</p>
                            <p>Career</p>
                            <p>Study</p>
                        </div>
                    </div>
                    <div className="login__body-item">
                        <div className="login__body-title">Need Some Help!</div>
                        <div className="login__body-list">
                            <p>Supporting</p>
                            <p>Notification</p>
                        </div>
                    </div>
                    <div className="login__body-item">
                        <div className="login__body-title">Connect</div>
                        <div className="login__body-list">
                            <p>
                                <Facebook />
                            </p>
                            <p>
                                <Instagram />
                            </p>
                            <p>
                                <Twitter />
                            </p>
                            <p>
                                <LinkedIn />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="login__bottom">
                    <div className="login__bottom-center">
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
