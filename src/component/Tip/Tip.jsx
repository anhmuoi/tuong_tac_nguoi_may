import React from 'react';
import './Tip.scss';
import img1 from '../../assets/Images/uploadprofile.svg';
import img2 from '../../assets/Images/uploaduserpic.svg';

const dataTip = [
    {
        id: 1,
        img: img1,
        title: 'Profile Photo',
        desc: 'Upload your unique profile image, so your followers can instantly recognize you.',
    },
    {
        id: 2,
        img: img2,
        title: 'Cover Photo',
        desc: 'Upload your unique cover image, so your followers can instantly recognize you.',
    },
];

function Tip() {
    return (
        <div className="tip">
            <div className="tip__heading">Reviews & Ratings </div>
            <div className="tip__content">
                {dataTip.map((item) => (
                    <>
                        <div key={item.id} className="tip__item">
                            <div className="tip__item-left">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="tip__item-right">
                                <div className="tip__text1">{item.title}</div>
                                <div className="tip__text2">{item.desc}</div>
                                <button className="review__btn">Upload</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Tip;
