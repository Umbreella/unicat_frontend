import React from 'react';
import {Image} from "react-bootstrap";

const SmallPartner = (props) => {
    const data = props.data;

    return (
        <div className="owl-item partner_item">
            <Image src={data.image}/>
        </div>
    );
};

export default SmallPartner;