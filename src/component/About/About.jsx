import { School, Work } from '@mui/icons-material';
import React from 'react';
import Email from '../Email/Email.jsx';
import Info from '../Info/Info.jsx';
import './About.scss';

const dataExp = [
    {
        icon: <Work />,
        title: 'Frontend Developer (Angular)',
        address: 'Ginger Webs Pvt. Ltd',
        time: 'Jan 2020 - Present',
    },
    {
        icon: <Work />,
        title: 'Frontend and backend developer',
        address: 'Mystral',
        time: 'Dec 2018 - Jan 2020',
    },
];
const dataEdu = [
    {
        icon: <School />,
        title: 'Shree Ganapati Institute Of technology, ghaziabad',
        address: 'Bachelor of Technology',
        time: 'Aug 2008 - Jul 2012',
    },
    {
        icon: <School />,
        title: 'DDUSBV',
        address: '12th',
        time: 'Mar 2006 - Apr 2007',
    },
    {
        icon: <School />,
        title: 'sidharth international public school',
        address: 'CBSE',
        time: 'Mar 2004 - Mar 2005',
    },
];
function About() {
    return (
        <div className="about">
            <div className="about__right">
                <div className="about__summary">
                    <div className="about__summary-title">Summary</div>
                    <div className="about__summary-desc">
                        Have experience in teaching for 2 years. M. tech in computer science. currently working as front end developer in Ginger webs
                        pvt ltd. Previously worked in Mystral as front end and backend developer.
                    </div>
                </div>
                <div className='about__info'>
                    <Info data={dataExp} heading="Experience" />
                    <Info data={dataEdu} heading="Education" />
                </div>
            </div>
            <div className="about__left">
                <Email />
            </div>
        </div>
    );
}

export default About;
