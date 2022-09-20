import React from 'react'
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import blog from "../../images/blog_1.jpg";

const LargeBlog = (props) => {
    const columnWidth = props.columnWidth;
    const currentNews = props.news;

    return (
        <div className="blog_post"
             style={{width: columnWidth()}}>
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
                        <li>
                            <NavLink to="/">
                                qwerqwerqwer
                            </NavLink>
                        </li>
                        <li>november 11, 2017</li>
                    </ul>
                </div>
                <div className="blog_post_text">
                    <p>
                        {currentNews.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LargeBlog;