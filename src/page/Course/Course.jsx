import React, { useState } from 'react';
import './Course.scss';
import courseBg from '../../assets/Images/course-bg.png';
import { IconButton, InputAdornment, Modal, TextField } from '@mui/material';
import { FilterAlt, Search } from '@mui/icons-material';
import cr1 from '../../assets/Images/cr1.jpg';
import cr2 from '../../assets/Images/cr2.jpg';
import cr3 from '../../assets/Images/cr3.jpg';
import ListingCourse from '../../component/ListingCourse/ListingCourse.jsx';
import ListCourseScroll from '../../component/ListCourseScroll/ListCourseScroll.jsx';
import FilterCourse from '../../component/FilterCourse/FilterCourse.jsx';

const data = {
    id: 1,
    heading: 'All Course',
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
        {
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
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
        {
            id: 13,
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
            id: 14,
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
            id: 15,
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
            id: 16,
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
            id: 17,
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
            id: 18,
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
        {
            id: 19,
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
            id: 20,
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
            id: 21,
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
            id: 22,
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
            id: 23,
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
            id: 24,
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
};
const dataTrending = {
    id: 1,
    heading: 'Trending Courses',
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
        {
            id: 7,
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
            id: 8,
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
    ],
};

function Course() {
    const [dataCard, setDataCard] = useState(data);
    const [input, setInput] = useState('');
    const [openFilter, setOpenFilter] = useState(false);

    const handleChangeSearch = (e) => {
        let newData = { ...data };
        let dataArr = [];
        data.listCourse.map((item) => {
            if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                dataArr.push(item);
            }
        });
        newData.listCourse = dataArr;
        console.log(dataArr);

        setDataCard(newData);
        setInput(e.target.value);
    };

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };
    const handleCloseFilter = () => {
        setOpenFilter(false);
    };
    return (
        <div className="courseAll">
            <Modal style={{ width: '40%', left: '30%', top: '5%' }} open={openFilter} onClose={handleCloseFilter}>
                <FilterCourse handleCloseFilter={handleCloseFilter}/>
            </Modal>
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
                    <IconButton onClick={() => handleOpenFilter()}>
                        <FilterAlt />
                    </IconButton>
                    <div className="courseAll__filter">
                        <TextField
                            value={input}
                            name="search"
                            style={{ backgroundColor: '#EDF1F4' }}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search></Search>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => handleChangeSearch(e)}
                            placeholder="title"
                        ></TextField>
                    </div>
                </div>
            </div>

            <div className="courseAll__listing">
                <ListCourseScroll data={dataTrending} />
                <ListingCourse data={dataCard} />
            </div>
        </div>
    );
}

export default Course;
