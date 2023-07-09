import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FeaturesSidebarLine = (props) => {
    const feature = props.feature;

    return (
        <div
            className="d-flex flex-row align-items-center justify-content-between"
            style={{marginTop: 20}}>
            <div>
                <FontAwesomeIcon icon={feature.icon}
                                 style={{
                                     width: 20,
                                     marginRight: 10,
                                     color: "#14bdee"
                                 }}/>
                <span>{feature.title}</span>
            </div>
            <div className="feature_text ml-auto">
                {feature.value}
            </div>
        </div>
    );
};

export default FeaturesSidebarLine;