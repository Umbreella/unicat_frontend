import React from 'react';
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {EVENTS_ROUTE} from "../../utils/consts";

const LargeEvent = (props) => {
    const data = props.data;
    const date_event = new Date(data.date);

    return (
        <div className="event">
            <div className="event_image">
                <Image src={data.preview}/>
            </div>
            <div
                className="event_body d-flex flex-row align-items-start justify-content-start">
                <div className="event_date">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center trans_200">
                        <div className="event_day trans_200">
                            {date_event.getDate()} / {date_event.getMonth() + 1}
                        </div>
                    </div>
                </div>
                <div className="event_content">
                    <div className="event_title">
                        <NavLink to={EVENTS_ROUTE + data.id}>
                            {data.title}
                        </NavLink>
                        <div className="event_info_container">
                            <div className="event_info">
                                <FontAwesomeIcon icon={faClock}
                                                 style={{
                                                     width: 14,
                                                     height: 14
                                                 }}/>
                                <span>
                                    {data.startTime} -
                                    {data.endTime}
                                </span>
                            </div>
                            <div className="event_info">
                                <FontAwesomeIcon icon={faMapMarker}
                                                 style={{
                                                     width: 14,
                                                     height: 14
                                                 }}/>
                                <span>{data.place}</span>
                            </div>
                            <div className="event_text">
                                <p>{data.shortDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeEvent;