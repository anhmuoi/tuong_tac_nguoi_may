import React, { useEffect, useState } from 'react';
import CardConnect from '../CardConnect/CardConnect.jsx';
import card1 from '../../assets/Images/connect.png';
import './Connect.scss';
import { Fab } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
function Connect() {
    const [isHorizontalScrollEnabled, setIsHorizontalScrollEnabled] = useState(false);

    useEffect(() => {
        const scrollDiv = document.getElementById('imageConnectList');
        if ((scrollDiv && scrollDiv.scrollWidth) > (scrollDiv && scrollDiv.clientWidth)) {
            setIsHorizontalScrollEnabled(true);
        } else {
            setIsHorizontalScrollEnabled(false);
        }
    }, [isHorizontalScrollEnabled]);

    const handleScrollLeft = () => {
        const scrollDiv = document.getElementById('imageConnectList');
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        const scrollDiv = document.getElementById('imageConnectList');
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="connect">
            <div className="connect__heading">Suggested Connections</div>
            <div className="connect__card" id="imageConnectList">
                <CardConnect data={card1} />
                <CardConnect data={card1} />
                <CardConnect data={card1} />
                <CardConnect data={card1} />
                <CardConnect data={card1} />
                <CardConnect data={card1} />
            </div>
            {isHorizontalScrollEnabled && (
                <div className="arrow_btn">
                    <Fab onClick={() => handleScrollLeft()} color="default" size="small">
                        <KeyboardArrowLeft />
                    </Fab>
                    <Fab onClick={() => handleScrollRight()} color="default" size="small">
                        <KeyboardArrowRight />
                    </Fab>
                </div>
            )}

            <div className="connect__see">
                <div>All suggested connections</div>
                <KeyboardArrowRight />
            </div>
        </div>
    );
}

export default Connect;
