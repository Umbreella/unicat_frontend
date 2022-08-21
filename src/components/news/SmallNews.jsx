import React from 'react';
import {NavLink} from "react-router-dom";

const SmallNews = () => {
    return (
        <div className="news_post_small">
            <NavLink className="news_post_small_title" to="/">
                Home-based business insurance issue (Spring 2017 - 2018)
            </NavLink>
            <div className="news_post_meta">
                <NavLink to="/">
                    admin
                </NavLink>
                <NavLink to="/">
                    november 11, 2017
                </NavLink>
            </div>
        </div>
    );
};

export default SmallNews;