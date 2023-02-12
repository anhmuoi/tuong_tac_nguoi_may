import React from 'react';
import Filter from '../../component/Filter/Filter.jsx';
import Rank from '../../component/Rank/Rank.jsx';
import './LeaderBoard.scss';
import imgBg from '../../assets/Images/bg.png';
import top1 from '../../assets/Images/top1.svg';
import top2 from '../../assets/Images/top2.svg';
import top3 from '../../assets/Images/top3.svg';
import p1 from '../../assets/Images/profile.png';
import p2 from '../../assets/Images/p2.png';
import p3 from '../../assets/Images/p3.png';
import me from '../../assets/Images/me.png';
import od1 from '../../assets/Images/od1.png';
import od2 from '../../assets/Images/od2.png';
import od3 from '../../assets/Images/od3.png';
import od4 from '../../assets/Images/od4.png';
import Reward from '../../component/Reward/Reward.jsx';

const dataOrder = [
    {
        img: od1,
        point: 12345,
        name: 'Neha verma',
    },
    {
        img: od2,
        point: 999,
        name: 'Neha',
    },
    {
        img: od3,
        point: 777,
        name: 'Neha verma',
    },
    {
        img: od4,
        point: 555,
        name: 'Neha verma',
    },
    {
        img: od1,
        point: 12345,
        name: 'Neha verma',
    },
    {
        img: od2,
        point: 999,
        name: 'Neha verma',
    },
    {
        img: od3,
        point: 777,
        name: 'Neha verma',
    },
    {
        img: od4,
        point: 555,
        name: 'Neha verma',
    },
    {
        img: od1,
        point: 12345,
        name: 'Neha verma',
    },
    {
        img: od2,
        point: 999,
        name: 'Neha verma',
    },
    {
        img: od3,
        point: 777,
        name: 'Neha verma',
    },
    {
        img: od4,
        point: 555,
        name: 'Neha verma',
    },
    {
        img: od1,
        point: 12345,
        name: 'Neha verma',
    },
    {
        img: od2,
        point: 999,
        name: 'Neha verma',
    },
    {
        img: od3,
        point: 777,
        name: 'Neha verma',
    },
    {
        img: od4,
        point: 555,
        name: 'Neha verma',
    },
    {
        img: od1,
        point: 12345,
        name: 'Neha verma',
    },
    {
        img: od2,
        point: 999,
        name: 'Neha verma',
    },
    {
        img: od3,
        point: 777,
        name: 'Neha verma',
    },
    {
        img: od4,
        point: 555,
        name: 'Neha verma',
    },
];

function LeaderBoard() {
    return (
        <div className="leader">
            <div className="leader__left">
                <Filter />
            </div>
            <div className="leader__center">
                <div className="leader__top" style={{ backgroundImage: `url(${imgBg})` }}>
                    <div className="leader__top2">
                        <div>
                            <img src={p2} alt="" className="leader__top2-img" />
                            <img className="leader__top2-number" alt="" src={top2}></img>
                        </div>
                        <div className="leader__top-name">Abhishek Kumar</div>
                        <div className="leader__top-point">13102 Point</div>
                    </div>
                    <div className="leader__top1">
                        <div>
                            <img src={p1} alt="" className="leader__top1-img" />
                            <img className="leader__top1-number" alt="" src={top1}></img>
                        </div>
                        <div className="leader__top-name">SAURABH SHARMA</div>
                        <div className="leader__top-point">14368 Point</div>
                    </div>
                    <div className="leader__top2">
                        <div>
                            <img src={p3} alt="" className="leader__top2-img" />
                            <img className="leader__top2-number" alt="" src={top3}></img>
                        </div>
                        <div className="leader__top-name">Ashish Verma</div>
                        <div className="leader__top-point">11163 Point</div>
                    </div>
                </div>

                <div className="leader__order">
                    <div className="leader__me">
                        <div className="leader__avatar">
                            <div className="leader__index">42.3k</div>
                            <img src={me} alt="" />
                            <div className="name">nguyễn mười.</div>
                        </div>
                        <div className="leader__amount">65 point</div>
                    </div>
                    {dataOrder.map((item, key) => (
                        <>
                            <div className="leader__item">
                                <div className="leader__avatar">
                                    <div className="leader__index">{key + 4}</div>
                                    <img src={item.img} alt="" />
                                    <div className="name">{item.name}</div>
                                </div>
                                <div className="leader__amount">{item.point} point</div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="leader__right">
                <Rank />
                <Reward />
            </div>
        </div>
    );
}

export default LeaderBoard;
