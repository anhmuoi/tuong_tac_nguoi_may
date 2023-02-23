import React from 'react';
import './Inbox.scss';
import mess1 from '../../assets/Images/mess1.png';
import me from '../../assets/Images/me.png';
import { Send } from '@mui/icons-material';

function Inbox() {
    return (
        <div className="inbox">
            <div className="inbox__left">
                <div className="inbox__left-header">Inbox</div>
                <div className="inbox__left-item">
                    <div className="inbox__left-left">
                        <img src={mess1} alt="" />
                        <div>nguyen van A</div>
                    </div>
                    <div className="inbox__left-time">19 Feb 1:24 PM</div>
                </div>
            </div>
            <div className="inbox__right">
                <div className="inbox__right-header">
                    <img src={mess1} alt="" />
                    <div>nguyen van A</div>
                </div>
                <div className="inbox__chat">
                    <div className="inbox__fromA">
                        <img src={mess1} alt="" />
                        <div>
                            <div className="inbox__mess">Hi! Mười</div>
                            <div className="inbox__time">17 Jan 7:16 AM</div>
                        </div>
                    </div>
                    <div className="inbox__fromB">
                        <div>
                            <div className="inbox__mess active">Hi! Nguyễn văn A</div>
                            <div className="inbox__time">17 Jan 7:16 AM</div>
                        </div>
                        <img src={me} alt="" className="inbox__avatar" />
                    </div>
                </div>

                <div className="inbox__type">
                    <input type="text" className="inbox__input" id="inbox" placeholder="Type something to send..."></input>
                    <div className="inbox__send">
                        <Send />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
