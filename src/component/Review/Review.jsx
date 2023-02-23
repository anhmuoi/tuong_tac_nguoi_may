import React from 'react';
import rateImg from '../../assets/Images/ratings-01.svg';
import './Review.scss';
function Review({ isOtherPage }) {
    return (
        <div className="review">
            <div className="review__heading">{isOtherPage ? 'Reviews' : 'Reviews & Ratings'} </div>
            <div className="review__content">
                {isOtherPage ? (
                    <>
                        <div className='review__totalRate'>
                            <div className='review__totalRate-num'>5.0</div>
                            <div className='review__totalRate-detail'>5 Ratings</div>
                        </div>
                        <div className="review__rate">
                            <div className="review__star">
                                5 <img src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg" alt="study24x7" />
                            </div>
                            <div className="review__line">
                                <div className="review__line-wrapper">
                                    <div className="skills html" style={{ width: '100%', background: '#f05050' }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="review__ratingCount">5.0</div>
                        </div>
                        <div className="review__rate">
                            <div className="review__star">
                                4 <img src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg" alt="study24x7" />
                            </div>
                            <div className="review__line">
                                <div className="review__line-wrapper">
                                    <div className="skills html" style={{ width: '80%' }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="review__ratingCount">0.0</div>
                        </div>
                        <div className="review__rate">
                            <div className="review__star">
                                3 <img src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg" alt="study24x7" />
                            </div>
                            <div className="review__line">
                                <div className="review__line-wrapper">
                                    <div className="skills html" style={{ width: '80%' }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="review__ratingCount">0.0</div>
                        </div>
                        <div className="review__rate">
                            <div className="review__star">
                                2 <img src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg" alt="study24x7" />
                            </div>
                            <div className="review__line">
                                <div className="review__line-wrapper">
                                    <div className="skills html" style={{ width: '80%' }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="review__ratingCount">0.0</div>
                        </div>
                        <div className="review__rate">
                            <div className="review__star">
                                1 <img src="https://img1.study24x7.com/assets/images/svg-one/icons8-star-filled-filled-gray.svg" alt="study24x7" />
                            </div>
                            <div className="review__line">
                                <div className="review__line-wrapper">
                                    <div className="skills html" style={{ width: '80%' }}>
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                            <div className="review__ratingCount">0.0</div>
                        </div>
                    </>
                ) : (
                    <>
                        <img className="review__img" src={rateImg} alt="" />
                        <div className="review__text1">No ratings yet!</div>
                        <div className="review__text2">Be the first to recommend this page.</div>
                        <button className="review__btn">Review</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Review;
