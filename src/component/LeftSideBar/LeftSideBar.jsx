import {
    AccountCircle,
    Article,
    Cabin,
    Create,
    Dns,
    DocumentScanner,
    FileCopy,
    InsertDriveFile,
    LibraryBooks,
    LiveTv,
    Save,
    Snowshoeing,
    Star,
} from '@mui/icons-material';
import { List } from '@mui/material';
import React from 'react';
import './LeftSideBar.scss';

const dataAction = [
    {
        icon: <Create></Create>,
        text: 'Question',
    },
    {
        icon: <LiveTv></LiveTv>,
        text: 'Live Classes',
    },
    {
        icon: <Article></Article>,
        text: 'Articles',
    },
    {
        icon: <Save></Save>,
        text: 'Saved',
    },
    {
        icon: <Star></Star>,
        text: 'Interests',
    },
    {
        icon: <Snowshoeing></Snowshoeing>,
        text: 'Career Counselling',
    },
    {
        icon: <Cabin></Cabin>,
        text: 'Campus Hiring',
    },
];

const dataPage = [
    {
        icon: <InsertDriveFile></InsertDriveFile>,
        text: 'My Pages',
    },
    {
        icon: <FileCopy></FileCopy>,
        text: 'Create a Page',
    },
];
const dataProduct = [
    {
        icon: <Dns></Dns>,
        text: 'Courses',
    },
    {
        icon: <LibraryBooks></LibraryBooks>,
        text: 'E-books',
    },
    {
        icon: <DocumentScanner></DocumentScanner>,
        text: 'Test Series',
    },
];

function LeftSideBar() {
    return (
        <div className="leftSide">
            <div className="leftSide__info">
                <div className="logo">
                    <AccountCircle style={{ width: 50, height: 50 }} />
                </div>
                <div className="name">
                    <div className="name_acc">Nguyễn Mười</div>
                    <div className="name_edit">Edit profile</div>
                </div>
            </div>
            <div className="leftSide__data">
                <div className="leftSide__connection">
                    <div className="number">0</div>
                    <div className="text">Connections</div>
                </div>
                <div className="leftSide__connection">
                    <div className="number">0</div>
                    <div className="text">Followers</div>
                </div>
                <div className="leftSide__connection">
                    <div className="number">0</div>
                    <div className="text">Following</div>
                </div>
            </div>
            <div className="leftSide__horizon"></div>

            <div className="leftSide__action">
                {dataAction.map((item, key) => (
                    <div key={key} className="leftSide__action-item">
                        <div>{item.icon}</div>
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>

            <div className="leftSide__page">
                <p className="leftSide__page-title">Pages</p>
                <div className="leftSide__action">
                    {dataPage.map((item, key) => (
                        <div key={key} className="leftSide__action-item">
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="leftSide__page">
                <p className="leftSide__page-title">Products</p>
                <div className="leftSide__action">
                    {dataProduct.map((item, key) => (
                        <div key={key} className="leftSide__action-item">
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
