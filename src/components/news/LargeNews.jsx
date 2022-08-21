import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const LargeNews = () => {
    return (
        <div className="news_post_large_container">
            <div className="news_post_large">
                <div className="news_post_image">
                    <Image />
                </div>
                <NavLink className="news_post_large_title" to="/">
                    Here’s What You Need to Know About Online Testing
                    for the ACT and SAT
                </NavLink>
                <div className="news_post_meta">
                    <NavLink to="/">
                        admin
                    </NavLink>
                    <NavLink to="/">
                        november 11, 2017
                    </NavLink>
                </div>
                <div className="news_post_text">
                    <p>Policy analysts generally agree on a need for reform, but not on which path policymakers should
                        take. Can America learn anything from other nations...</p>
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