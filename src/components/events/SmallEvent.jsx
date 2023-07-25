import React from 'react';
import {NavLink} from "react-router-dom";
import {BLOG_ROUTE} from "../../utils/consts";

const SmallEvent = (props) => {
    const data = props.data;
    const date = new Date(data.date);

    return (
        <div className="news_post_small pb-4">
            <NavLink className="news_post_small_title"
                     to={BLOG_ROUTE + "news/" + data.id}>
                {data.title}
            </NavLink>
            <div className="news_post_meta">
                <div>
                    {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
                </div>
                <div>
                    {data.place}
                </div>
            </div>
        </div>
    );
};

export default SmallEvent;