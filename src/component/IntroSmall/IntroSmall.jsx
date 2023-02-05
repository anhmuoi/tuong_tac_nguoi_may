import React from 'react';
import './IntroSmall.scss';

function IntroSmall({ data }) {
    return (
        <div className='introSmall'>
            <img src={data} alt=""></img>
        </div>
    );
}

export default IntroSmall;
