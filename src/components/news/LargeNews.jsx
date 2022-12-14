import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const LargeNews = (props) => {
    const data = props.data;

    return (
        <div className="news_post_large_container">
            <div className="news_post_large">
                <div className="news_post_image" style={{marginBottom: 23}}>
                    <Image src={data.preview}/>
                </div>
                <NavLink className="news_post_large_title" to="/">
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
                    <NavLink to="">
                        read more
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LargeNews;