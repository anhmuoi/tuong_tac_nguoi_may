import { AccessTime } from '@mui/icons-material';
import React from 'react';
import './CardCourse.scss';
import { Card } from '@mui/material';
function CardCourse({ data }) {
    return (
        <Card className="card" style={{minWidth: 211, maxWidth: 211}}>
            <img className="card__img" src={data} alt=""></img>
            <div className="card__content">
                <div className="card__title">Free SEO training...</div>
                <div className="card__author">by Digital Marketing...</div>
                <div className="card__rate">
                    <div className="star">4.6</div>
                    <div>(9 Ratings)</div>
                </div>
                <div className="card__learn">Learners</div>
                <div className="card__time">
                    <AccessTime />
                    Validity Unlimited
                </div>
                <div className="card__price">
                    <div>Free</div>
                </div>
            </div>
        </Card>
    );
}

export default CardCourse;
