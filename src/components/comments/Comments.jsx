import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Image} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";

const Comments = (props) => {
    const data = props.data;
    const {author} = data;

    return (
        <li>
            <div
                className="comment_item d-flex flex-row align-items-start jutify-content-start">
                <div className="comment_image">
                    <div>
                        <Image src={author.photo}/>
                    </div>
                </div>
                <div className="comment_content">
                    <div
                        className="comment_title_container d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex flex-md-row flex-column">
                            <div className="comment_author">
                                <NavLink to="#">
                                    {author.name}
                                </NavLink>
                            </div>
                            {
                                data.rating ?
                                    <div className="comment_rating ps-md-2" style={{paddingTop: 2}}>
                                        <Rating initialValue={data.rating}
                                                readonly={true}
                                                allowTitleTag={false}
                                                size={15}/>
                                    </div> :
                                    <></>
                            }
                        </div>

                        <div className="comment_time ml-auto">
                            {data.createdAt}
                        </div>
                    </div>
                    <div className="comment_text">
                        <p>{data.body}</p>
                    </div>
                    <div
                        className="comment_extras d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_extra">
                            <NavLink to="#">
                                <FontAwesomeIcon icon={faHeart} />
                                <span>{data.countLike}</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Comments;