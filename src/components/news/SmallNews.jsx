import React from 'react';
import {NavLink} from "react-router-dom";

const SmallNews = (props) => {
    const data = props.data;

    return (
        <div className="news_post_small">
            <NavLink className="news_post_small_title" to="/">
                {data.title}
            </NavLink>
            <div className="news_post_meta">
                <NavLink to="/">
                    admin
                </NavLink>
                <NavLink to="/">
                    {data.createdAt}
                </NavLink>
            </div>
        </div>
    );
};

export default SmallNews;