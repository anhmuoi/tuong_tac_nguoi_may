import React from 'react';
import './FirstCourse.scss';
import checkImg from '../../assets/Images/correct.svg';
import teacherImg from '../../assets/Images/courseDesk.png';

const data = [
    {
        id: 1,
        text: 'Earn by selling courses',
    },
    {
        id: 2,
        text: 'Free and Paid Courses',
    },
    {
        id: 3,
        text: 'Take Live Classes',
    },
    {
        id: 4,
        text: 'Get Branding Assistance',
    },
];

function FirstCourse() {
    return (
        <div className="first">
            <div className="first__left">
                <div className='first__title'>Create your first Course</div>
                <div className='first__desc'>Compile your study content and provide awesome study materials as an educator.</div>
                <div className="first__option">
                    {data.map((item) => (
                        <>
                            <div className="first__item" key={item.id}>
                                <img src={checkImg} alt="" />
                                <div>{item.text}</div>
                            </div>
                        </>
                    ))}
                </div>

                <div className="first__btn">Create Now</div>
            </div>
            <div className="first__right">
                <img src={teacherImg} alt="" />
            </div>
        </div>
    );
}

export default FirstCourse;
