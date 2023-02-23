import {
    AccountCircle,
    Article,
    Cabin,
    Create,
    Dns,
    DocumentScanner,
    FileCopy,
    GppBad,
    InsertDriveFile,
    LibraryBooks,
    LiveTv,
    Public,
    Save,
    Snowshoeing,
    Star,
} from '@mui/icons-material';
import { Box, List, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import './LeftSideBar.scss';
import me from '../../assets/Images/me.png';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

function LeftSideBar({ dataAction, dataPage, dataProduct, isFanPage }) {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();

    const handleClickCourse = (text) => {
        if (text === 'Courses') {
            navigate('course');
        }
    };

    const onchangeTitle = (evt) => {
        setTitle(evt.target.value);
    };

    const onchangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleOpenCreatePage = (id) => {
        if (id === 2) {
            setOpenModal(true);
        }
    };
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className="leftSide">
            <Modal open={openModal} onClose={handleClose}>
                <Box sx={style}>
                    <div className="create__header">Create a Page</div>
                    <div className="create__body">
                        <div>Just select a page type to get started.</div>
                        <div className="create__select">
                            <div className={`${select === 0 ? 'create__active' : ''}`} onClick={() => setSelect(0)}>
                                <GppBad /> Private
                            </div>
                            <div className={`${select === 1 ? 'create__active' : ''}`} onClick={() => setSelect(1)}>
                                <Public /> Public
                            </div>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            Provide a suitable<strong> title </strong>
                            for your page.
                        </div>
                        <div className="login__comment">
                            <div className="login__input">
                                <input
                                    type="text"
                                    multiple
                                    name="title"
                                    value={title}
                                    onChange={(e) => onchangeTitle(e)}
                                    id="title"
                                    placeholder="title"
                                ></input>
                            </div>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                            Provide a suitable
                            <strong> name </strong>
                            for your page.
                        </div>
                        <div className="login__comment">
                            <div className="login__input">
                                <input
                                    type="text"
                                    multiple
                                    id="name"
                                    placeholder="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onchangeName(e)}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="create__next">
                        <p className={`${name && title ? 'create__active' : ''}`} onClick={() => navigate(`/page/${title}`)}>
                            Next
                        </p>
                    </div>
                </Box>
            </Modal>
            {!isFanPage && (
                <>
                    <div className="leftSide__info">
                        <div className="logo" onClick={() => navigate('/profile/me')}>
                            <img src={me} alt="" style={{ width: 50, height: 50, borderRadius: '50%' }} />
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
                </>
            )}

            <div className="leftSide__action">
                {dataAction &&
                    dataAction.map((item, key) => (
                        <div key={key} className="leftSide__action-item">
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                        </div>
                    ))}
            </div>

            <div className="leftSide__page">
                {dataPage && (
                    <>
                        <p className="leftSide__page-title">Pages</p>
                        <div className="leftSide__action">
                            {dataPage.map((item, key) => (
                                <div key={key} className="leftSide__action-item" onClick={() => handleOpenCreatePage(item.id)}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="leftSide__page">
                {dataProduct && (
                    <>
                        <p className="leftSide__page-title">Products</p>
                        <div className="leftSide__action">
                            {dataProduct.map((item, key) => (
                                <div key={key} className="leftSide__action-item" onClick={() => handleClickCourse(item.text)}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default LeftSideBar;
