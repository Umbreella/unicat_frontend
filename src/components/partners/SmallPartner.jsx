import React from 'react';
import {Image} from "react-bootstrap";
import partner from '../../images/partner_1.png'
import {NavLink} from "react-router-dom";

const SmallPartner = (props) => {
    return (
        <NavLink to='/'>
            <div className="owl-item partner_item">
                <Image src={partner}/>
            </div>
        </NavLink>
    );
};

export default SmallPartner;