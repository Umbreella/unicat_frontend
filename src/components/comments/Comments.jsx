import React from 'react';
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import avatarDefault from '../../images/avatarDefault.png'

const Comments = (props) => {
    const data = props.data;
    const {author} = data;

    return (
        <li>
            <div
                className="comment_item d-flex flex-row align-items-start jutify-content-start">
                <div className="comment_image">
                    <div>
                        <Image src={author.photo !== null ? author.photo : avatarDefault}/>
                    </div>
                </div>
                <div className="comment_content">
                    <div
                        className="comment_title_container d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex flex-md-row flex-column">
                            <div className="comment_author">
                                <div>
                                    {author.name}
                                </div>
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
                </div>
            </div>
        </li>
    );
};

export default Comments;