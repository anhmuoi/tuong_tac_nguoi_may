import React from 'react';
import './Course.scss';
import courseBg from '../../assets/Images/course-bg.png';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import cr1 from '../../assets/Images/cr1.jpg';
import cr2 from '../../assets/Images/cr2.jpg';
import cr3 from '../../assets/Images/cr3.jpg';
import ListingCourse from '../../component/ListingCourse/ListingCourse.jsx';

const data = [
    {
        id: 1,
        heading: 'Trending Course',
        listCourse: [
            {
                id: 1,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: ' Data science with python ',
                author: ' by Henry Harvin',
                rate: '5.0',
                numberRating: 17,
                status: ' 43 Enrollment ',
                time: ' Validity 11 month,26 days  ',
                price: 'Free',
            },
            {
                id: 2,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Finance and Banking',
                author: ' by Digital Finance and Banking',
                rate: '4.6',
                numberRating: 15,
                status: ' 17 Enrollment ',
                time: 'Validity Unlimited',
                price: 'Free',
            },
            {
                id: 3,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: ' NCERT BASIC PREMIUM ',
                author: ' by RAU IAS COACHING',
                rate: '5.0',
                numberRating: 5,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹1,199 ',
            },
            {
                id: 4,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 20,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹5,199 ',
            },
            {
                id: 5,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '4.5',
                numberRating: 40,
                status: ' 44 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹3,99 ',
            },
            {
                id: 6,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 13,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹6.99 ',
            },
        ],
    },
    {
        id: 2,
        heading: 'What other are Learning',
        listCourse: [
            {
                id: 1,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: ' Data science with python ',
                author: ' by Henry Harvin',
                rate: '5.0',
                numberRating: 17,
                status: ' 43 Enrollment ',
                time: ' Validity 11 month,26 days  ',
                price: 'Free',
            },
            {
                id: 2,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Finance and Banking',
                author: ' by Digital Finance and Banking',
                rate: '4.6',
                numberRating: 15,
                status: ' 17 Enrollment ',
                time: 'Validity Unlimited',
                price: 'Free',
            },
            {
                id: 3,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: ' NCERT BASIC PREMIUM ',
                author: ' by RAU IAS COACHING',
                rate: '5.0',
                numberRating: 5,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹1,199 ',
            },
            {
                id: 4,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 20,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹5,199 ',
            },
            {
                id: 5,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '4.5',
                numberRating: 40,
                status: ' 44 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹3,99 ',
            },
            {
                id: 6,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 13,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹6.99 ',
            },
        ],
    },
    {
        id: 3,
        heading: 'Top Courses recommended for you',
        listCourse: [
            {
                id: 1,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: ' Data science with python ',
                author: ' by Henry Harvin',
                rate: '5.0',
                numberRating: 17,
                status: ' 43 Enrollment ',
                time: ' Validity 11 month,26 days  ',
                price: 'Free',
            },
            {
                id: 2,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Finance and Banking',
                author: ' by Digital Finance and Banking',
                rate: '4.6',
                numberRating: 15,
                status: ' 17 Enrollment ',
                time: 'Validity Unlimited',
                price: 'Free',
            },
            {
                id: 3,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: ' NCERT BASIC PREMIUM ',
                author: ' by RAU IAS COACHING',
                rate: '5.0',
                numberRating: 5,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹1,199 ',
            },
            {
                id: 4,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 20,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹5,199 ',
            },
            {
                id: 5,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '4.5',
                numberRating: 40,
                status: ' 44 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹3,99 ',
            },
            {
                id: 6,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 13,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹6.99 ',
            },
        ],
    },
    {
        id: 4,
        heading: 'Technology',
        listCourse: [
            {
                id: 1,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: ' Data science with python ',
                author: ' by Henry Harvin',
                rate: '5.0',
                numberRating: 17,
                status: ' 43 Enrollment ',
                time: ' Validity 11 month,26 days  ',
                price: 'Free',
            },
            {
                id: 2,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Finance and Banking',
                author: ' by Digital Finance and Banking',
                rate: '4.6',
                numberRating: 15,
                status: ' 17 Enrollment ',
                time: 'Validity Unlimited',
                price: 'Free',
            },
            {
                id: 3,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: ' NCERT BASIC PREMIUM ',
                author: ' by RAU IAS COACHING',
                rate: '5.0',
                numberRating: 5,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹1,199 ',
            },
            {
                id: 4,
                img: cr1,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 20,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹5,199 ',
            },
            {
                id: 5,
                img: cr2,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '4.5',
                numberRating: 40,
                status: ' 44 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹3,99 ',
            },
            {
                id: 6,
                img: cr3,
                minWidth: 260,
                maxWidth: 260,
                title: 'Free SEO training...',
                author: 'by Digital Marketing...',
                rate: '5.0',
                numberRating: 13,
                status: ' 22 Enrollment ',
                time: 'Validity Unlimited',
                price: '₹6.99 ',
            },
        ],
    },
];

function Course() {
    return (
        <div className="courseAll">
            <div className="courseAll__image">
                <img src={courseBg} alt=""></img>
            </div>
            <div className="courseAll__search">
                <div className="courseAll__search-left">
                    <div className="courseAll__heading">Lets start learning, nguyễn</div>
                    <div className="courseAll__cate">
                        <div className="courseAll__cate-item active">My Course</div>
                        <div className="courseAll__cate-item">My E-Book</div>
                    </div>
                </div>
                <div className="courseAll__search-right">
                    <div className="courseAll__filter">
                        <TextField
                            style={{ backgroundColor: '#EDF1F4' }}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search></Search>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="search"
                        ></TextField>
                    </div>
                </div>
            </div>

            <div className="courseAll__listing">
                {data.map((item) => (
                    <ListingCourse key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Course;