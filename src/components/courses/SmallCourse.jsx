import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const SmallCourse = (props) => {
    const item = props.item;

    if (item === undefined)
        return <></>

    return (
        <div
            className="latest d-flex flex-row align-items-start justify-content-start pb-4"
            style={{borderBottom: "solid 1px #e5e5e5"}}>
            <div className="latest_image">
                <div>
                    <Image src={item.preview}/>
                </div>
            </div>
            <div className="latest_content">
                <div className="latest_title">
                    <NavLink to={COURSES_ROUTE + item.id}>
                        {item.title}
                    </NavLink>
                </div>
                <div className="latest_price">
                    {
                        item.discount !== null ?
                            <>
                                <span className="course_price_span">
                                    {item.price}
                                </span>
                                {item.price * (1 - item.discount.percent / 100)}₽
                            </> :
                            <>
                                {item.price}₽
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default SmallCourse;