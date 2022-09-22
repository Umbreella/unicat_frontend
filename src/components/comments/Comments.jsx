import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faReply} from "@fortawesome/free-solid-svg-icons";
import {Image} from "react-bootstrap";
import avatar from "../../images/comment_1.jpg";

const Comments = (props) => {
    const comment = props.comment;

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
                                {comment.author}
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
                            comment.can_replay ?
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
                comment.childs ?
                    <ul className="ps-lg-5">
                        {
                            comment.childs.map((value, index, array) =>
                                <Comments key={index} comment={value}/>
                            )
                        }
                    </ul> : null
            }
        </li>
    );
};

export default Comments;