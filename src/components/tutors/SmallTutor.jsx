import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGooglePlus, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SmallTutor = () => {
    return (
        <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
                <div className="team_image">
                    <Image />
                </div>
                <div className="team_body">
                    <NavLink className="team_title" to="/">
                        Jacke Masito
                    </NavLink>
                    <div className="team_subtitle">
                        Marketing & Management
                    </div>
                    <div className="social_list">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <FontAwesomeIcon icon={faGooglePlus} />
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallTutor;