import React from 'react';
import {NavLink} from "react-router-dom";
import {BLOG_ROUTE} from "../../utils/consts";

const SmallNews = (props) => {
    const data = props.data;

    return (
        <div className="news_post_small">
            <NavLink className="news_post_small_title"
                     to={BLOG_ROUTE + "/news/" + data.id}>
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