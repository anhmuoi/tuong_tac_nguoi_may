import React from 'react';
import './Enroll.scss';
import enroll from '../../assets/Images/enrol.png';
import { ArrowRight, BookmarkBorder } from '@mui/icons-material';
import star from '../../assets/Images/star-filled.svg';

function Enroll() {
    return (
        <div className="enroll">
            <div className="enroll__top">
                <img src={enroll} alt="" />
                <div className="enroll__book">
                    <BookmarkBorder />
                </div>
            </div>

            <div className="enroll__center">
                <div className="enroll__left">
                    <div className="enroll__text1">Post Graduate Program in Digital Marketing</div>
                    <div className="enroll__text2">All levels - English</div>
                    <div className="enroll__star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        5.0
                    </div>
                </div>
                <div className="enroll__right">
                    <div className="enroll__free">FREE</div>
                    <div className="enroll__now">
                        Enroll Now <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="enroll__cate">
                <div className="enroll__cate-item">Digital Marketing</div>
                <div className="enroll__cate-item">Media</div>
            </div>
        </div>
    );
}

export default Enroll;
