import React from 'react';
import './Email.scss';
import img from '../../assets/Images/girl.svg';
import icon from '../../assets/Images/email.svg';

function Email() {
    return (
        <div className="email">
            <div className="email__img">
                <img src={img} alt=""></img>
            </div>
            <div className="email__text1">Invite your friends</div>
            <div className="email__text2">Study along with your friends on Study24x7</div>

            <div className="email__input">
                <input type="text" multiple id="input" placeholder="Your friend's email address"></input>
                <div className="email__send">Send</div>
            </div>
            <div>or invite with</div>
            <div className="email__icon">
                <img alt="" src={icon} />
            </div>
        </div>
    );
}

export default Email;
