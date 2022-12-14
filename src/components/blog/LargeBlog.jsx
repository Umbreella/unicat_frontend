import React from 'react'
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import blog from "../../images/blog_1.jpg";

const LargeBlog = (props) => {
    const columnWidth = props.width;
    const currentNews = props.news;

    return (
        <div className="blog_post">
            {
                currentNews.image && <div className="blog_post_image">
                    <Image src={blog} />
                </div>
            }
            <div className="blog_post_body">
                <div className="blog_post_title">
                    <NavLink to="#">
                        With Changing Students and Times
                    </NavLink>
                </div>
                <div className="blog_post_meta">
                    <ul>
                        <li>november 11, 2017</li>
                    </ul>
                </div>
                <div className="blog_post_text"
                     style={{
                         maxWidth: columnWidth
                     }}>
                    <p>
                        {currentNews.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LargeBlog;