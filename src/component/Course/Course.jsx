import React, { useEffect, useState } from 'react';
import CardCourse from '../Card/CardCourse.jsx';
import card1 from '../../assets/Images/card1.png';
import './Course.scss';
import { Fab } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const dataCard = [
    {
        id: 1,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
    {
        id: 2,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        numberRating: 17,
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
    {
        id: 3,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        numberRating: 17,
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
    {
        id: 4,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        numberRating: 17,
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
    {
        id: 5,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        numberRating: 17,
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
    {
        id: 6,
        img: card1,
        minWidth: 211,
        maxWidth: 211,
        title: 'Free SEO training...',
        author: 'by Digital Marketing...',
        rate: '4.6',
        numberRating: 17,
        status: 'learner',
        time: 'Validity Unlimited',
        price: 'Free',
    },
];

function Course() {
    const [isHorizontalScrollEnabled, setIsHorizontalScrollEnabled] = useState(false);

    useEffect(() => {
        const scrollDiv = document.getElementById('imageList');
        if ((scrollDiv && scrollDiv.scrollWidth) > (scrollDiv && scrollDiv.clientWidth)) {
            setIsHorizontalScrollEnabled(true);
        } else {
            setIsHorizontalScrollEnabled(false);
        }
    }, [isHorizontalScrollEnabled]);

    const handleScrollLeft = () => {
        const scrollDiv = document.getElementById('imageList');
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        const scrollDiv = document.getElementById('imageList');
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="course">
            <div className="course__heading">Popular Products</div>
            <div className="course__card" id="imageList">
                {dataCard.map((item) => (
                    <CardCourse key={item.id} data={item} />
                ))}
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

            <div className="course__see">See All</div>
        </div>
    );
}

export default Course;
