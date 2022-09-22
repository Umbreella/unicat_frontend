import React from 'react';
import {NavLink} from "react-router-dom";

const DownloadSidebar = () => {
    return (
        <div className="sidebar_section">
            <div
                className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
                <div className="sidebar_banner_background"/>
                <div className="sidebar_banner_overlay"/>
                <div className="sidebar_banner_content">
                    <div className="banner_title">
                        Бесплатная книга
                    </div>
                    <div className="banner_button">
                        <NavLink to="/">
                            скачать сейчас
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSidebar;