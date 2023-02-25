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
import "./PostSecond.scss";
import javaImg from "../../assets/Images/java.png";
import me from "../../assets/Images/me.png";
import { useNavigate } from "react-router-dom";

function PostSecond({ name, avatar, pageName }) {
    const navigate = useNavigate();

    const [like, setLike] = useState(false);
    const navigation = useNavigate();
    const clickLike = () => {
        setLike(!like);
    };
    return (
        <div
            className="postSecond"
            style={{ marginTop: pageName ? "25px" : "5px" }}
        >
            {pageName && (
                <div className="post__position">
                    Posted in
                    <span
                        className="post__position-page"
                        onClick={() => navigate("page/Nareshtihal#otherPage")}
                    >
                        {pageName}
                    </span>
                </div>
            )}

            <div className="postSecond__header">
                <div className="postSecond__header-left">
                    <div className="postSecond__avatar">
                        <img
                            src={avatar}
                            style={{ width: 50, height: 50 }}
                            alt=""
                        />
                    </div>
                    <div className="postSecond__desc">
                        <div className="postSecond__name">{name}</div>
                        <div className="postSecond__time">16 hr 33 min </div>
                    </div>
                </div>
                <div className="postSecond__header-right">
                    <div className="postSecond__follow">Follow</div>
                    <div className="postSecond__mark">
                        <BookmarkBorder></BookmarkBorder>
                    </div>
                    <div className="postSecond__choose">
                        <MoreHoriz />
                    </div>
                </div>
            </div>

            <div className="postSecond__body">
                <div className="postSecond__content">
                    15 Tips To Make Your Java Application Run Faster.
                </div>
                <div className="postSecond__hashtag">
                    #CryptocurrencyExchangeScript #BitcoinExchangeScript
                    #CryptoExchangeScript #P2PCryptocurrencyExchangeScript
                    #CryptocurrencyExchangeDevelopment
                </div>
                <div className="postSecond__cate">
                    <div className="postSecond__cate-item">
                        Java Technologies
                    </div>
                    <div className="postSecond__cate-item">Web Development</div>
                    <div className="postSecond__cate-item">Databases</div>
                </div>
            </div>

            <div className="postSecond__link"></div>

            <div className="postSecond__action">
                <div
                    onClick={() => clickLike()}
                    className={`postSecond__action-item ${
                        like ? "isLike" : ""
                    }`}
                >
                    <ThumbUpOffAlt />
                    <div className={`postSecond__action-text`}>Like</div>
                </div>
                <div className="postSecond__action-item">
                    <Textsms />
                    <div className="postSecond__action-text">Comment</div>
                </div>
                <div className="postSecond__action-item">
                    <Share />
                    <div className="postSecond__action-text">Share</div>
                </div>
            </div>

            <div className="postSecond__comment">
                <div
                    className="postSecond__avatar"
                    onClick={() => navigation("/profile/me")}
                >
                    <img
                        src={me}
                        alt=""
                        style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                </div>
                <div className="postSecond__input">
                    <input
                        type="text"
                        multiple
                        id="input"
                        placeholder="Write your comment"
                    ></input>
                    <label htmlFor="postSecond" className="postSecond__file">
                        <input
                            style={{ display: "none" }}
                            accept="image/*"
                            id="postSecond"
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

export default PostSecond;
