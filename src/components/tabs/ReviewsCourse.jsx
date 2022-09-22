import React from 'react';
import StarDivBar from "../reviews/StarDivBar";
import Comments from "../comments/Comments";
import {NavLink} from "react-router-dom";

const ReviewsCourse = (props) => {
    const percentStar = [
        {
            title: '5 star',
            width: '100%'
        },
        {
            title: '4 star',
            width: '50%'
        },
        {
            title: '3 star',
            width: '25%'
        },
        {
            title: '2 star',
            width: '10%'
        },
        {
            title: '1 star',
            width: '5%'
        }
    ]

    const comments = [
        {
            author: 'Mark',
            can_replay : true,
            childs: [
                {
                    author: 'Mark1',
                    can_replay : false,
                    childs: null
                },
                {
                    author: 'Mark1.2',
                    can_replay : false,
                    childs: null
                }
            ]
        },
        {
            author: 'Mark2',
            can_replay : true,
            childs: [
                {
                    author: 'Mark2.1',
                    can_replay : false,
                    childs: null
                },
                {
                    author: 'Mark2.2',
                    can_replay : false,
                    childs: null
                }
            ]
        }
    ]

    return (
        <>
            <div className="tab_panel_title">Course Review</div>
            <div className="review_rating_container">
                <div className="review_rating">
                    <div className="review_rating_num">4.5</div>
                    <div className="review_rating_stars">
                        <div className="rating_r rating_r_4">
                            <i></i><i></i><i></i><i></i><i></i>
                        </div>
                    </div>
                    <div className="review_rating_text">(28 Ratings)</div>
                </div>

                <div className="review_rating_bars">
                    <ul>
                        {
                            percentStar.map((value, index, array) =>
                                <StarDivBar key={index} rateBar={value}/>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="comments_container">
                <ul className="comments_list">
                    {
                        comments.map((value, index, array) =>
                            <Comments key={index} comment={value}/>
                        )
                    }
                </ul>
            </div>
            <div className="add_comment_container">
                <div className="add_comment_title">Add a review</div>
                <div className="add_comment_text">You must be
                    <NavLink to="#">
                        logged
                    </NavLink> in to post a comment.
                </div>
            </div>
        </>
    );
};

export default ReviewsCourse;