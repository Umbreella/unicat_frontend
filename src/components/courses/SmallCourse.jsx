import React, {useContext} from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";
import {Context} from "../../index";

const SmallCourse = (props) => {
    const item = props.item;

    if (item === undefined)
        return <></>

    return (
        <div
            className="latest d-flex flex-row align-items-start
            justify-content-start">
            <div className="latest_image">
                <div>
                    <Image src={item.preview}/>
                </div>
            </div>
            <div className="latest_content">
                <div className="latest_title">
                    <NavLink to={COURSES_ROUTE + "/" + item.id}>
                        {item.title}
                    </NavLink>
                </div>
                <div className="latest_price">
                    {item.price}
                </div>
            </div>
        </div>
    );
};

export default SmallCourse;