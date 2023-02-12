import { Apartment, WorkspacePremium } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutDetail.scss';

function AboutDetail({ name }) {
    const navigate = useNavigate();
    return (
        <div className="aboutDetail">
            <div className="aboutDetail__heading" onClick={() => navigate(`/profile/Ranbir kapoor/about`)}>
                About
            </div>
            <div className="aboutDetail__content">
                <div className="aboutDetail__text1">Have experience in teaching for 2 years. M. tech in computer science. currently</div>
                <div className="aboutDetail__text2">...</div>
                <div className="aboutDetail__text3">see more</div>
                <div className="aboutDetail__text4">
                    <WorkspacePremium />
                    <div>
                        Studied 12th <strong>at DDUSBV</strong>
                    </div>
                </div>
                <div className="aboutDetail__text5">
                    <WorkspacePremium />
                    <div>
                        Frontend and backend developer <strong>at Mystral</strong>
                    </div>
                </div>
                <div className="aboutDetail__text6">
                    <Apartment />
                    <div>
                        Lives in , <strong>Uttar Pradesh</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutDetail;
