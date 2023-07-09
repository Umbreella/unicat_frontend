import React, {useContext, useEffect} from 'react';
import {Image} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {COURSES_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import Countdown from "react-countdown";

const LargeCourse = (props) => {
    const item = props.item;

    return (
        <div className={props.style.col + " course_col "}>
            <div className="course">
                <div className="course_image">
                    <Image src={item.preview}/>
                </div>
                <div className="course_body">
                    <h3 className="course_title">
                        <NavLink to={COURSES_ROUTE + item.id}>
                            {item.title}
                        </NavLink>
                    </h3>
                    <div className="course_teacher">
                        {item.teacher.fullName}
                    </div>
                    <div className="course_text">
                        <p>
                            {item.shortDescription}
                        </p>
                    </div>
                </div>
                <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row
                        align-items-center justify-content-start">
                        <div className="course_info">
                            <FontAwesomeIcon icon={faUserGraduate}
                                             style={{marginRight: 6}}/>
                            <span>{item.countListeners}</span>
                        </div>
                        <div className="course_info">
                            <FontAwesomeIcon icon={faStar}
                                             style={{marginRight: 6}}/>
                            <span>{item.avgRating}</span>
                        </div>
                        <div className="course_price ms-auto">
                            {
                                item.discount !== null ?
                                    <div
                                        className="d-flex justify-content-end align-items-end">
                                            <span
                                                className="course_price_span">{item.price}</span>
                                        {item.price * (100 - item.discount.percent) / 100}₽
                                    </div> :
                                    <>
                                        {item.price}₽
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeCourse;