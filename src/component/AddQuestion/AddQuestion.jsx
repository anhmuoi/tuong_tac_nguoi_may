import {
    ArrowDropDown,
    Article,
    AttachEmail,
    Create,
    Language,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import "./AddQuestion.scss";

const dataAction = [
    {
        icon: <Create></Create>,
        text: "Question",
    },
    {
        icon: <Article></Article>,
        text: "Articles",
    },
    {
        icon: <AttachEmail></AttachEmail>,
        text: "Attachment",
    },
];

function AddQuestion() {
    return (
        <div className="addQuestion">
            <div className="addQuestion__text" style={{ borderRadius: "5px" }}>
                <TextField
                    fullWidth
                    multiline
                    variant="filled"
                    style={{
                        borderRadius: "5px",
                    }}
                    placeholder="Share Your Post"
                />
            </div>
            <div className="addQuestion__interest">
                <div className="addQuestion__interest-item">+ Interest</div>
            </div>
            <div className="addQuestion__action">
                <div className="addQuestion__left">
                    {dataAction.map((item, key) => (
                        <div key={key} className="addQuestion__left-item">
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>
                <div className="addQuestion__right">
                    <div className="addQuestion__connect">
                        <Language />
                        <ArrowDropDown />
                    </div>
                    <div className="submit">Submit</div>
                </div>
            </div>
        </div>
    );
}

export default AddQuestion;
