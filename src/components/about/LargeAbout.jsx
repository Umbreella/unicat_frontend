import React from 'react';
import {Col, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import about from "../../images/about_1.jpg";

const LargeAbout = () => {
    return (
        <Col className="col-lg-4 about_col">
            <div className="about_item">
                <div className="about_item_image">
                    <Image src={about}/>
                </div>
                <div className="about_item_title">
                    <NavLink to="/">
                        Our Stories
                    </NavLink>
                </div>
                <div className="about_item_text">
                    <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet
                        adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
                </div>
            </div>
        </Col>
    );
};

export default LargeAbout;