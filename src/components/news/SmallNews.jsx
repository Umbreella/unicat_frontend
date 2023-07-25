import React from 'react';
import {NavLink} from "react-router-dom";
import {BLOG_ROUTE} from "../../utils/consts";

const SmallNews = (props) => {
    const data = props.data;

    return (
        <div className="news_post_small pb-4">
            <NavLink className="news_post_small_title"
                     to={BLOG_ROUTE + "news/" + data.id}>
                {data.title}
            </NavLink>
            <div className="news_post_meta">
                <div>
                    {data.author}
                </div>
                <div>
                    {data.createdAt}
                </div>
            </div>
        </div>
    );
};

export default SmallNews;