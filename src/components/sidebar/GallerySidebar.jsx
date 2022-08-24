import React from 'react';
import SmallGallery from "../gallery/SmallGallery";

const GallerySidebar = () => {
    return (
        <div className="sidebar_gallery">
            <ul className="gallery_items d-flex flex-row align-items-start
            justify-content-between flex-wrap">
                <li className="gallery_item">
                    <SmallGallery />
                </li>
                <li className="gallery_item">
                    <SmallGallery />
                </li>
                <li className="gallery_item">
                    <SmallGallery />
                </li>
                <li className="gallery_item">
                    <SmallGallery />
                </li>
                <li className="gallery_item">
                    <SmallGallery />
                </li>
                <li className="gallery_item">
                    <SmallGallery />
                </li>
            </ul>
        </div>
    );
};

export default GallerySidebar;