import React from 'react';
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const LargeEvent = (props) => {
    const item = props.item;
    const date_event = new Date(item.date);

    return (
        <div className="col-lg-4 event_col">
            <div className="event">
                <div className="event_image">
                    <Image src={item.preview}/>
                </div>
                <div className="event_body d-flex flex-row align-items-start justify-content-start">
                    <div className="event_date">
                        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                            <div className="event_day trans_200">
                                {date_event.getDate()} / {date_event.getMonth() + 1}
                            </div>
                        </div>
                    </div>
                    <div className="event_content">
                        <div className="event_title">
                            <NavLink to="/">
                                {item.title}
                            </NavLink>
                            <div className="event_info_container">
                                <div className="event_info">
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>
                                        {item.startTime} -
                                        {item.endTime}
                                    </span>
                                </div>
                                <div className="event_info">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                    <span>{item.place}</span>
                                </div>
                                <div className="event_text">
                                    <p>{item.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeEvent;