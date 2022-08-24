import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import latest from "../../images/latest_1.jpg"

const SmallCourse = () => {
    return (
        <div
            className="latest d-flex flex-row align-items-start
            justify-content-start">
            <div className="latest_image">
                <div>
                    <Image src={latest}/>
                </div>
            </div>
            <div className="latest_content">
                <div className="latest_title">
                    <NavLink to="/">
                        How to Design a Logo a Beginners Course
                    </NavLink>
                </div>
                <div className="latest_price">
                    Free
                </div>
            </div>
        </div>
    );
};

export default SmallCourse;