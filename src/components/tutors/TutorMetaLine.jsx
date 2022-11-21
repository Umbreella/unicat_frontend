import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TutorMetaLine = (props) => {
    const tutorMeta = props.tutorMeta;

    return (
        <div
            className="teacher_meta d-flex flex-row align-items-center justify-content-between">
            <div className="teacher_meta_title">
                {tutorMeta.title}
            </div>
            <div className="teacher_meta_text ml-auto">
                <span>
                    {tutorMeta.value}
                </span>
                <FontAwesomeIcon icon={tutorMeta.icon}
                                 style={{color: "#14bdee"}}/>
            </div>
        </div>
    );
};

export default TutorMetaLine;