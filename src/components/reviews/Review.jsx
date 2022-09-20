import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faReply} from "@fortawesome/free-solid-svg-icons";
import {Image} from "react-bootstrap";
import avatar from "../../images/comment_1.jpg";

const Review = (props) => {
    const review = props.review;

    return (
        <li>
            <div
                className="comment_item d-flex flex-row align-items-start jutify-content-start">
                <div className="comment_image">
                    <div>
                        <Image src={avatar}/>
                    </div>
                </div>
                <div className="comment_content">
                    <div
                        className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_author">
                            <NavLink to="#">
                                {review.author}
                            </NavLink>
                        </div>
                        <div className="comment_rating">
                            <div className="rating_r rating_r_4">
                                <i></i><i></i><i></i><i></i><i></i>
                            </div>
                        </div>
                        <div className="comment_time ml-auto">
                            1 day ago
                        </div>
                    </div>
                    <div className="comment_text">
                        <p>There are many variations of passages of Lorem Ipsum
                            available, but the majority have alteration in some
                            form, by injected humour.</p>
                    </div>
                    <div
                        className="comment_extras d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_extra comment_likes">
                            <NavLink to="#">
                                <FontAwesomeIcon icon={faHeart} />
                                <span>15</span>
                            </NavLink>
                        </div>
                        {
                            review.can_replay ?
                                <div className="comment_extra comment_reply">
                                    <NavLink to="#">
                                        <FontAwesomeIcon icon={faReply} />
                                        <span>Reply</span>
                                    </NavLink>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
            {
                review.childs ?
                    <ul className="ps-lg-5">
                        {
                            review.childs.map((value, index, array) =>
                                <Review key={index} review={value}/>
                            )
                        }
                    </ul> : null
            }
        </li>
    );
};

export default Review;