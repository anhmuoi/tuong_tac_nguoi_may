import { Article, LiveTv } from '@mui/icons-material';
import React from 'react';
import './Program.scss';

function Program() {
    return (
        <div className="program">
            <div className="program__heading">Course Curriculum</div>
            <div className="program__content">
                <div className="program__text1">Post Graduate Program in Digital Marketing</div>
            </div>
            <div className="program__page">
                <div className="program__icon">
                    <Article />
                </div>
                <div className="program__detail">
                    <div
                        className="
                    program__title"
                    >
                        Post Graduate Program in Digital Marketing Brochure
                    </div>
                    <div className="program__desc">28 pages</div>
                </div>
            </div>
            <div className="program__page">
                <div className="program__icon">
                    <LiveTv />
                </div>
                <div className="program__detail">
                    <div
                        className="
                    program__title"
                    >
                        Post Graduate Program in Digital Marketing by Edubabble LLP
                    </div>
                    <div className="program__desc">LIVE1h 0m - Wed Nov 16 2022 17:30:00</div>
                </div>
            </div>
        </div>
    );
}

export default Program;
