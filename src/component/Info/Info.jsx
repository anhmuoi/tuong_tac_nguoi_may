import React from 'react';
import './Info.scss';

function Info({ data, heading }) {
    return (
        <div className="info">
            <div className="info__heading">{heading}</div>
            <div className="info__content">
                {data.map((item, key) => (
                    <div className="info__item" key={key}>
                        <div className="info__icon">{item.icon}</div>
                        <div className="info__content">
                            <div className="info__title">{item.title}</div>
                            <div className="info__address">{item.address}</div>
                            <div className="info__time">{item.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
