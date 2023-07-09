import React from 'react'
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import {NEWS_ROUTE} from "../../utils/consts";

const MediumNews = (props) => {
    const columnWidth = props.width;
    const data = props.data;

    return (
        <div className="blog_post">
            <div className="blog_post_image">
                <Image src={data.preview} />
            </div>
            <div className="blog_post_body">
                <div className="blog_post_title">
                    <NavLink to={NEWS_ROUTE + data.id}>
                        {data.title}
                    </NavLink>
                </div>
                <div className="blog_post_meta">
                    <ul>
                        <li>{data.author}</li>
                        <li>{data.createdAt}</li>
                    </ul>
                </div>
                <div className="blog_post_text"
                     style={{
                         maxWidth: columnWidth
                     }}>
                    <p>
                        {data.shortDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MediumNews;