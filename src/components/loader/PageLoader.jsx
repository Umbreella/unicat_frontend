import React from 'react';
import HorizontalLoader from "./HorizontalLoader";

const PageLoader = () => {
    return (
        <div className="d-flex align-items-center" style={{minHeight: "50vh"}}>
            <HorizontalLoader/>
        </div>
    );
};

export default PageLoader;