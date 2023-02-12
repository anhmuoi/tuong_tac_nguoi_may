import React from 'react';
import './People.scss';
import avt from '../../assets/Images/avt.png';
import { KeyboardArrowRight, PersonAddAlt1 } from '@mui/icons-material';

const data = [{ index: 1 }, { index: 1 }, { index: 1 }];

function People({ isConnect }) {
    return (
        <div className="people">
            <div className="people__heading">{isConnect ? 'Connections' : 'People You May Know'}</div>
            <div className="people__body">
                {data.map((item, key) => (
                    <div className="people__item" key={key}>
                        <div className="people__avatar">
                            <img src={avt}></img>
                        </div>
                        <div className="people__info">
                            <div className="people__name">Naresh tihal</div>
                            <div className="people__connect">
                                {!isConnect && (
                                    <>
                                        <PersonAddAlt1 />
                                        <div className="people__text">Connect</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="people__view">
                <div>View all</div>
                <KeyboardArrowRight />
            </div>
        </div>
    );
}

export default People;
