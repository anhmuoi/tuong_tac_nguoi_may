import React from "react";
import "./ConnectDetail.scss";
import connectPeople from "../../assets/Images/connect-people.png";
import Email from "../Email/Email.jsx";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const data = [
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
    {
        img: connectPeople,
        name: "Naveen Kumar",
        company: "Educator & Learner",
        time: "Active 15 hr 9 min",
    },
];

function ConnectDetail() {
    return (
        <div className="connectDetail">
            <div className="connectDetail__right">
                <div className="connectDetail__heading">Connections</div>
                <div className="connectDetail__content">
                    {data.map((item, key) => (
                        <>
                            <div className="connectDetail__item" key={key}>
                                <div className="connectDetail__avatar">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="connectDetail__info">
                                    <div className="connectDetail__info-right">
                                        <div className="connectDetail__name">
                                            {item.name}
                                        </div>
                                        <div className="connectDetail__company">
                                            {item.company}
                                        </div>
                                        <div className="connectDetail__time">
                                            {item.time}
                                        </div>
                                    </div>
                                    <div className="connectDetail__info-left">
                                        <div className="connectDetail__connect">
                                            <PersonRemoveIcon />
                                            <div>Disconnect</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="connectDetail__left">
                <Email />
            </div>
        </div>
    );
}

export default ConnectDetail;
