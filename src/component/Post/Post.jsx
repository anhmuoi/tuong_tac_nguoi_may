import {
    AccountCircle,
    BookmarkBorder,
    Image,
    MoreHoriz,
    Share,
    Textsms,
    ThumbUpOffAlt,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.scss";
import avt from "../../assets/Images/profile.png";
import me from "../../assets/Images/me.png";
function Post({ name, avatar, pageName }) {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    const clickLike = () => {
        setLike(!like);
    };

    return (
        <div className="post" style={{ marginTop: pageName ? "25px" : "5px" }}>
            {pageName && (
                <div className="post__position">
                    Posted in
                    <span
                        className="post__position-page"
                        onClick={() => navigate("/page/Nareshtihal#otherPage")}
                    >
                        {pageName}
                    </span>
                </div>
            )}

            <div className="post__header">
                <div
                    className="post__header-left"
                    onClick={() => navigate("/profile/Ranbirkapoor")}
                >
                    <div className="post__avatar">
                        <img
                            src={avatar}
                            alt=""
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                            }}
                        />
                    </div>
                    <div className="post__desc">
                        <div className="post__name">{name}</div>
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
                    Let's play and earn with Decentraland Clone Script which is
                    a readymade NFT Metaverse marketplace solution that can be
                    used to build an NFT like decentraland on the Ethereum
                    Blockchain. BlockchainAppsDeveloper are pioneer in
                    delivering a Decentraland Clone Script with high quality 3D
                    virtual reality. Explore:bit.ly/3XFo5hf
                    Whatsapp:bit.ly/3DsZ6pm
                </div>
                <div className="post__hashtag">
                    #CryptocurrencyExchangeScript #BitcoinExchangeScript
                    #CryptoExchangeScript #P2PCryptocurrencyExchangeScript
                    #CryptocurrencyExchangeDevelopment
                </div>
                <div className="post__cate">
                    <div className="post__cate-item">Digital Marketing</div>
                </div>
            </div>
            <div className="post__action">
                <div
                    onClick={() => clickLike()}
                    className={`post__action-item ${like ? "isLike" : ""}`}
                >
                    <ThumbUpOffAlt />
                    <div className="post__action-text">Like</div>
                </div>
                <div className="post__action-item">
                    <Textsms />
                    <div className="post__action-text">Comment</div>
                </div>
                <div className="post__action-item">
                    <Share />
                    <div className="post__action-text">Share</div>
                </div>
            </div>
            <div className="post__comment">
                <div
                    className="post__avatar"
                    onClick={() => navigate("/profile/me")}
                >
                    <img
                        src={me}
                        alt=""
                        style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                </div>
                <div className="post__input">
                    <input
                        type="text"
                        multiple
                        id="input"
                        placeholder="Write your comment"
                    ></input>
                    <label htmlFor="post" className="post__file">
                        <input
                            style={{ display: "none" }}
                            accept="image/*"
                            id="post"
                            multiple
                            type="file"
                        />
                        <Image />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Post;
