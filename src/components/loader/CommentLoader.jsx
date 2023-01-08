import React from 'react';
import HorizontalLoader from "./HorizontalLoader";

const CommentLoader = () => {
    return (
        <li>
            <div
                className="comment_item d-flex flex-row align-items-start jutify-content-start"
                style={{paddingBottom: 31}}>
                <HorizontalLoader/>
            </div>
        </li>
    );
};

export default CommentLoader;