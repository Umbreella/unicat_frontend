import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {BLOG_ROUTE} from "../../utils/consts";

const LargeNews = (props) => {
    const data = props.data;
    const full_news_url = BLOG_ROUTE + "news/" + data.id;

    return (
        <div className="news_post_large_container">
            <div className="news_post_large pb-4 mb-4">
                <div className="news_post_image" style={{marginBottom: 23}}>
                    <Image src={data.preview}/>
                </div>
                <NavLink className="news_post_large_title" to={full_news_url}>
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
                <div className="news_post_text">
                    {data.shortDescription}
                </div>
                <div className="news_post_link">
                    <NavLink to={full_news_url}>
                        read more
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LargeNews;