import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {SINGLE_COURSES_ROUTE} from "../../utils/consts";

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
                        <NavLink to={SINGLE_COURSES_ROUTE}>
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
                            <FontAwesomeIcon icon={faUserGraduate} style={{marginRight: 6}}/>
                            <span>{item.countIndependents} Студентов</span>
                        </div>
                        <div className="course_info">
                            <FontAwesomeIcon icon={faStar} style={{marginRight: 6}}/>
                            <span>5 Ratings</span>
                        </div>
                        <div className="course_price ms-auto">
                            <span>$150</span>
                            {item.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeCourse;