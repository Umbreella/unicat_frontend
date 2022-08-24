import React from 'react';
import {Image} from "react-bootstrap";
import gallery from "../../images/gallery_1.jpg";
import {NavLink} from "react-router-dom";

const SmallGallery = () => {
    return (
        <>
            <div
                className="gallery_item_overlay d-flex flex-column align-items-center justify-content-center">+
            </div>
            <NavLink className="colorbox" to="/">
                <Image src={gallery} />
            </NavLink>
        </>
    );
};

export default SmallGallery;