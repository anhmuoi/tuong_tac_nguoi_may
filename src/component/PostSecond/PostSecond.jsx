import { AccountCircle, BookmarkBorder, Image, MoreHoriz, Share, Textsms, ThumbUpOffAlt } from '@mui/icons-material';
import React from 'react';
import './PostSecond.scss';
import javaImg from '../../assets/Images/java.png';
function PostSecond() {
    return (
        <div className="postSecond">
            <div className="postSecond__header">
                <div className="postSecond__header-left">
                    <div className="postSecond__avatar">
                        <img src={javaImg} style={{ width: 50, height: 50 }} alt="" />
                    </div>
                    <div className="postSecond__desc">
                        <div className="postSecond__name">Java The Complete Guide</div>
                        <div className="postSecond__time">16 hr 33 min </div>
                    </div>
                </div>
                <div className="postSecond__header-right">
                    <div className="postSecond__follow">
                        Follow
                    </div>
                    <div className="postSecond__mark">
                        <BookmarkBorder></BookmarkBorder>
                    </div>
                    <div className="postSecond__choose">
                        <MoreHoriz />
                    </div>
                </div>
            </div>

            <div className="postSecond__body">
                <div className="postSecond__content">15 Tips To Make Your Java Application Run Faster.</div>
                <div className="postSecond__hashtag">
                    #CryptocurrencyExchangeScript #BitcoinExchangeScript #CryptoExchangeScript #P2PCryptocurrencyExchangeScript
                    #CryptocurrencyExchangeDevelopment
                </div>
                <div className="postSecond__cate">
                    <div className="postSecond__cate-item">Java Technologies</div>
                    <div className="postSecond__cate-item">Web Development</div>
                    <div className="postSecond__cate-item">Databases</div>
                </div>
            </div>

            <div className="postSecond__link"></div>

            <div className="postSecond__action">
                <div className="postSecond__action-item">
                    <ThumbUpOffAlt />
                    <div className="postSecond__action-text">Like</div>
                </div>
                <div className="postSecond__action-item">
                    <Textsms />
                    <div className="postSecond__action-text">Comment</div>
                </div>
                <div className="postSecond__action-item">
                    <Share />
                    <div className="postSecond__action-text">share</div>
                </div>
            </div>

            <div className="postSecond__comment">
                <div className="postSecond__avatar">
                    <AccountCircle style={{ width: 50, height: 50 }} />
                </div>
                <div className="postSecond__input">
                    <input type="text" multiple id="input" placeholder="Write your comment"></input>
                    <label htmlFor="postSecond" className="postSecond__file">
                        <input style={{ display: 'none' }} accept="image/*" id="postSecond" multiple type="file" />
                        <Image />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default PostSecond;
