import React, { useEffect, useState } from "react";
import CardCourse from "../Card/CardCourse.jsx";
import "./ListCourseScroll.scss";
import { Fab } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

function ListCourseScroll({ data }) {
    const [isHorizontalScrollEnabled, setIsHorizontalScrollEnabled] =
        useState(false);

    useEffect(() => {
        const scrollDiv = document.getElementById(
            `imageListCourseScroll-${data.id}`
        );
        if (
            (scrollDiv && scrollDiv.scrollWidth) >
            (scrollDiv && scrollDiv.clientWidth)
        ) {
            setIsHorizontalScrollEnabled(true);
        } else {
            setIsHorizontalScrollEnabled(false);
        }
    }, [isHorizontalScrollEnabled]);

    const handleScrollLeft = () => {
        const scrollDiv = document.getElementById(
            `imageListCourseScroll-${data.id}`
        );
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = () => {
        const scrollDiv = document.getElementById(
            `imageListCourseScroll-${data.id}`
        );
        if (scrollDiv) {
            scrollDiv.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="listCourseScroll">
            <div className="listCourseScroll__heading">
                {data.heading}
                <span>See All</span>
            </div>
            <div
                className="listCourseScroll__card"
                id={`imageListCourseScroll-${data.id}`}
            >
                {data.listCourse.map((item) => (
                    <CardCourse key={item.id} data={item} />
                ))}
            </div>
            {isHorizontalScrollEnabled && (
                <div className="arrow_btn">
                    <Fab
                        onClick={() => handleScrollLeft()}
                        color="default"
                        size="small"
                    >
                        <KeyboardArrowLeft />
                    </Fab>
                    <Fab
                        onClick={() => handleScrollRight()}
                        color="default"
                        size="small"
                    >
                        <KeyboardArrowRight />
                    </Fab>
                </div>
            )}
        </div>
    );
}

export default ListCourseScroll;
