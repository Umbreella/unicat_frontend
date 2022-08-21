import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUserGraduate} from "@fortawesome/free-solid-svg-icons";

const LargeCourse = () => {
    return (
        <div className="col-lg-4 course_col">
            <div className="course">
                <div className="course_image">
                    <Image />
                </div>
                <div className="course_body">
                    <h3 className="course_title">
                        <NavLink to="/">
                            Software Training
                        </NavLink>
                    </h3>
                    <div className="course_teacher">
                        Mr. John Taylor
                    </div>
                    <div className="course_text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipi
                            elitsed do eiusmod tempor
                        </p>
                    </div>
                </div>
                <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row
                        align-items-center justify-content-start">
                        <div className="course_info">
                            <FontAwesomeIcon icon={faUserGraduate} style={{marginRight: 6}}/>
                            <span>20 Student</span>
                        </div>
                        <div className="course_info">
                            <FontAwesomeIcon icon={faStar} style={{marginRight: 6}}/>
                            <span>5 Ratings</span>
                        </div>
                        <div className="course_price ms-auto">
                            <span>$150</span>
                            $130
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeCourse;