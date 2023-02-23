import { AccessTime } from '@mui/icons-material';
import React from 'react';
import './CardCourse.scss';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function CardCourse({ data }) {
    const navigate = useNavigate();
    return (
        <Card
            onClick={() => navigate('/detail-course')}
            className="card"
            style={{ minWidth: data.minWidth, maxWidth: data.maxWidth, cursor: 'pointer' }}
        >
            <img className="card__img" style={{ width: data.minWidth }} src={data.img} alt=""></img>
            <div className="card__content">
                <div className="card__title">{data.title}</div>
                <div className="card__author">{data.author}</div>
                <div className="card__rate">
                    <div className="star">{data.rate}</div>
                    <div>({data.numberRating} Ratings)</div>
                </div>
                <div className="card__learn">{data.status}</div>
                <div className="card__time">
                    <AccessTime />
                    {data.time}
                </div>
                <div className="card__price">
                    <div>{data.price}</div>
                </div>
            </div>
        </Card>
    );
}

export default CardCourse;
