import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const StarDivBar = (props) => {
    const rateBar = props.rateBar;

    return (
        <li>
            <span>
                {rateBar.title}
                <FontAwesomeIcon icon={faStar}
                                 style={{
                                     marginLeft: 4,
                                     color: 'rgb(255, 188, 11)',
                                 }}/>
            </span>
            <div className="review_rating_bar">
                <div style={{width: rateBar.width}}></div>
            </div>
        </li>
    );
};

export default StarDivBar;