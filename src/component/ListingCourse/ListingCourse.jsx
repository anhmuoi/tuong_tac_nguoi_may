import React, { useEffect, useState } from 'react';
import CardCourse from '../Card/CardCourse.jsx';
import './ListingCourse.scss';
import { Fab } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function ListingCourse({ data }) {
    const [isHorizontalScrollEnabled, setIsHorizontalScrollEnabled] = useState(false);

    useEffect(() => {
        const scrollDiv = document.getElementById(`imageListCourse-${data.id}`);
        if ((scrollDiv && scrollDiv.scrollWidth) > (scrollDiv && scrollDiv.clientWidth)) {
            setIsHorizontalScrollEnabled(true);
        } else {
            setIsHorizontalScrollEnabled(false);
        }
    }, [isHorizontalScrollEnabled]);

    return (
        <div className="listingCourse">
            <div className="listingCourse__heading">{data.heading}</div>
            <div className="listingCourse__card" id={`imageListCourse-${data.id}`}>
                {data.listCourse.map((item) => (
                    <CardCourse key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default ListingCourse;
