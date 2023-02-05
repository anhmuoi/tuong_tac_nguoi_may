import { AccessTime, PersonAddAlt1 } from '@mui/icons-material';
import React from 'react';
import './CardConnect.scss';
import { Card } from '@mui/material';
function CardConnect({ data }) {
    return (
        <Card className="cardConnect" style={{ minWidth: 143, maxWidth: 143 }}>
            <img className="cardConnect__img" src={data} alt=""></img>
            <div className="cardConnect__content">
                <div className="cardConnect__title">Anh Muoi</div>
            </div>
            <div className="cardConnect__btn">
                <PersonAddAlt1 />
                <div className='cardConnect__text'>Connect</div>
            </div>
        </Card>
    );
}

export default CardConnect;
