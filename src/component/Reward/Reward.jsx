import { KeyboardArrowRight } from '@mui/icons-material';
import React from 'react';
import './Reward.scss';

function Reward() {
    return (
        <div className="reward">
            <div className="reward__heading">
                <div>My Rewards</div>
                <div>65 point</div>
            </div>
            <div className="reward__body">
                <div className="reward__item">
                    <div className="reward__title">profile completion point</div>
                    <div className="reward__point">+15</div>
                </div>
                <div className="reward__item">
                    <div className="reward__title">sign up point</div>
                    <div className="reward__point">+50</div>
                </div>
            </div>
            <div className="reward__view">
                <div>View all</div>
                <KeyboardArrowRight />
            </div>
        </div>
    );
}

export default Reward;
