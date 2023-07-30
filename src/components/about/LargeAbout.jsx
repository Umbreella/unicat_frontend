import React from 'react';
import {Col, Image} from "react-bootstrap";

const LargeAbout = (props) => {
    const data = props.data;

    return (
        <Col className="col-lg-4 about_col">
            <div className="about_item">
                <div className="about_item_image">
                    <Image src={data.image}/>
                </div>
                <div className="about_item_title">
                    {data.title}
                </div>
                <div className="about_item_text">
                    {data.text}
                </div>
            </div>
        </Col>
    );
};

export default LargeAbout;