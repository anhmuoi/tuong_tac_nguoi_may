import { Close } from '@mui/icons-material';
import React, { useState } from 'react';
import './FilterCourse.scss';
import imgStar from '../../assets/Images/star-filled.svg';
import { IconButton } from '@mui/material';

const dataPrice = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Paid',
    },
    {
        id: 3,
        name: 'Free',
    },
];

const dataValidity = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Unlimited',
    },
    {
        id: 3,
        name: 'Limited',
    },
];

const dataRating = [
    {
        id: 1,
        number: 1,
    },
    {
        id: 2,
        number: 2,
    },
    {
        id: 3,
        number: 3,
    },
    {
        id: 4,
        number: 4,
    },
    {
        id: 5,
        number: 5,
    },
];

const dataLevel = [
    {
        id: 1,
        name: 'All Level',
    },
    {
        id: 2,
        name: 'Advance',
    },
    {
        id: 3,
        name: 'Intermediate',
    },
    {
        id: 4,
        name: 'Beginner',
    },
];

const dataLanguage = [
    {
        id: 1,
        name: 'English',
    },
    {
        id: 2,
        name: 'Vietnamese',
    },
    {
        id: 3,
        name: 'Korean',
    },
];

const dataPage = [
    {
        id: 1,
        name: 'UPSC Civil Services Exam Pr... ',
    },
    {
        id: 2,
        name: 'Topline Coaching',
    },
    {
        id: 3,
        name: 'Just Asking - Lets check yo... ',
    },
    {
        id: 4,
        name: 'Learn N Share - Get latest ...',
    },
    {
        id: 5,
        name: 'UPSC Civil Services Exam Pr... ',
    },
];

const dataInterest = [
    {
        id: 1,
        name: 'School',
    },
    {
        id: 2,
        name: 'UG (Undergraduate Entrance) ',
    },
    {
        id: 3,
        name: 'PG (Postgraduate Entrance) ',
    },
    {
        id: 4,
        name: 'Technology ',
    },
    {
        id: 5,
        name: 'Corporate ',
    },
    {
        id: 6,
        name: 'Competitive Exams ',
    },
    {
        id: 7,
        name: 'Government Jobs ',
    },
    {
        id: 8,
        name: 'Books ',
    },
];

function FilterCourse({ handleCloseFilter }) {
    const [price, setPrice] = useState(1);
    const [validity, setValidity] = useState(1);
    const [rating, setRating] = useState(5);
    const [level, setLevel] = useState(1);
    const [language, setLanguage] = useState(1);

    const handleChangePrice = (id) => {
        setPrice(id);
    };
    const handleChangeValidity = (id) => {
        setValidity(id);
    };
    const handleChangeRating = (id) => {
        setRating(id);
    };
    const handleChangeLevel = (id) => {
        setLevel(id);
    };
    const handleChangeLanguage = (id) => {
        setLanguage(id);
    };

    const clearFilter = () => {
        setValidity(1);
        setLanguage(1);
        setPrice(1);
        setRating(5);
        setLevel(1);
    };
    return (
        <div className="filterCourse">
            <div className="filterCourse__header">
                <div className="filterCourse__header-left">Filter</div>
                <div className="filterCourse__header-right">
                    <div onClick={() => clearFilter()}>Reset All</div>
                    <IconButton color="inherit" onClick={() => handleCloseFilter()}>
                        <Close color="inherit" />
                    </IconButton>
                </div>
            </div>

            <div className="filterCourse__page">
                <div className="filterCourse__price">
                    <div className="filterCourse__price-title">Price</div>
                    <div className="filterCourse__price-content">
                        {dataPrice.map((item) => (
                            <>
                                <div
                                    key={item.id}
                                    className={`filterCourse__price-item ${price === item.id ? 'active' : ''}`}
                                    onClick={() => handleChangePrice(item.id)}
                                >
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="filterCourse__price">
                    <div className="filterCourse__price-title">Validity</div>
                    <div className="filterCourse__price-content">
                        {dataValidity.map((item) => (
                            <>
                                <div
                                    key={item.id}
                                    className={`filterCourse__price-item ${validity === item.id ? 'active' : ''}`}
                                    onClick={() => handleChangeValidity(item.id)}
                                >
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="filterCourse__price">
                    <div className="filterCourse__price-title">Rating</div>
                    <div className="filterCourse__price-content">
                        {dataRating.map((item) => (
                            <>
                                <div
                                    key={item.id}
                                    className={`filterCourse__price-item ${rating === item.id ? 'active' : ''}`}
                                    onClick={() => handleChangeRating(item.id)}
                                >
                                    {item.number}
                                    <img src={imgStar} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="filterCourse__price">
                    <div className="filterCourse__price-title">Level</div>
                    <div className="filterCourse__price-content">
                        {dataLevel.map((item) => (
                            <>
                                <div
                                    key={item.id}
                                    className={`filterCourse__price-item ${level === item.id ? 'active' : ''}`}
                                    onClick={() => handleChangeLevel(item.id)}
                                >
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="filterCourse__price">
                    <div className="filterCourse__price-title">Language</div>
                    <div className="filterCourse__price-content">
                        {dataLanguage.map((item) => (
                            <>
                                <div
                                    key={item.id}
                                    className={`filterCourse__price-item ${language === item.id ? 'active' : ''}`}
                                    onClick={() => handleChangeLanguage(item.id)}
                                >
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="filterCourse__select">
                    <div className="filterCourse__select-title">Pages</div>
                    <div className="filterCourse__select-content">
                        {dataPage.map((item) => (
                            <>
                                <div key={item.id} className="filterCourse__select-item">
                                    <input type="checkbox"></input>
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="filterCourse__select">
                    <div className="filterCourse__select-title">Interests</div>
                    <div className="filterCourse__select-content">
                        {dataInterest.map((item) => (
                            <>
                                <div key={item.id} className="filterCourse__select-item">
                                    <input type="checkbox"></input>
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterCourse;
