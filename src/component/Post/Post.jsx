import { AccountCircle, BookmarkBorder, Image, MoreHoriz, Share, Textsms, ThumbUpOffAlt } from '@mui/icons-material';
import React from 'react';
import './Post.scss';
function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-left">
                    <div className="post__avatar">
                        <AccountCircle style={{ width: 50, height: 50 }} />
                    </div>
                    <div className="post__desc">
                        <div className="post__name">Ranbir kapoor</div>
                        <div className="post__time">16 hr 33 min </div>
                    </div>
                </div>
                <div className="post__header-right">
                    <div className="post__mark">
                        <BookmarkBorder></BookmarkBorder>
                    </div>
                    <div className="post__choose">
                        <MoreHoriz />
                    </div>
                </div>
            </div>

            <div className="post__body">
                <div className="post__content">
                    Let's play and earn with Decentraland Clone Script which is a readymade NFT Metaverse marketplace solution that can be used to
                    build an NFT like decentraland on the Ethereum Blockchain. BlockchainAppsDeveloper are pioneer in delivering a Decentraland Clone
                    Script with high quality 3D virtual reality. Explore:bit.ly/3XFo5hf Whatsapp:bit.ly/3DsZ6pm
                </div>
                <div className="post__hashtag">
                    #CryptocurrencyExchangeScript #BitcoinExchangeScript #CryptoExchangeScript #P2PCryptocurrencyExchangeScript
                    #CryptocurrencyExchangeDevelopment
                </div>
                <div className="post__cate">
                    <div className="post__cate-item">Digital Marketing</div>
                </div>
            </div>

            <div className="post__action">
                <div className="post__action-item">
                    <ThumbUpOffAlt />
                    <div className="post__action-text">Like</div>
                </div>
                <div className="post__action-item">
                    <Textsms />
                    <div className="post__action-text">Comment</div>
                </div>
                <div className="post__action-item">
                    <Share />
                    <div className="post__action-text">share</div>
                </div>
            </div>

            <div className="post__comment">
                <div className="post__avatar">
                    <AccountCircle style={{ width: 50, height: 50 }} />
                </div>
                <div className="post__input">
                    <input type="text" multiple id="input" placeholder="Write your comment"></input>
                    <label htmlFor="post" className="post__file">
                        <input style={{ display: 'none' }} accept="image/*" id="post" multiple type="file" />
                        <Image />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Post;