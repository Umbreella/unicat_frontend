import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const LargeEvent = () => {
    return (
        <div className="col-lg-4 event_col">
            <div className="event">
                <div className="event_image">
                    <Image />
                </div>
                <div className="event_body d-flex flex-row align-items-start justify-content-start">
                    <div className="event_date">
                        <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                            <div className="event_day trans_200">21</div>
                            <div className="event_month trans_200">Aug</div>
                        </div>
                    </div>
                    <div className="event_content">
                        <div className="event_title">
                            <NavLink to="/">
                                Which Country Handles Student Debt?
                            </NavLink>
                            <div className="event_info_container">
                                <div className="event_info">
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>15.00 - 19.30</span>
                                </div>
                                <div className="event_info">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                    <span>25 New York City</span>
                                </div>
                                <div className="event_text">
                                    <p>Policy analysts generally agree on a need for reform,
                                        but not on which path...</p>
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