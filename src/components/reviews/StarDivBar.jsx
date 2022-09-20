import React from 'react';

const StarDivBar = (props) => {
    const rateBar = props.rateBar;

    return (
        <li>
            <span>
                {rateBar.title}
            </span>
            <div className="review_rating_bar">
                <div style={{width: rateBar.width}}></div>
            </div>
        </li>
    );
};

export default StarDivBar;