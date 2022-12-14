import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGooglePlus, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SmallTutor = (props) => {
    const item = props.item;

    return (
        <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
                <div className="team_image">
                    <Image src={item.photo}/>
                </div>
                <div className="team_body">
                    <NavLink className="team_title" to="/">
                        {item.fullName}
                    </NavLink>
                    {/*<div className="team_subtitle">*/}
                    {/*    Marketing & Management*/}
                    {/*</div>*/}
                    <div className="social_list">
                        <ul>
                            <li>
                                {
                                    item.facebook ?
                                        <a href={item.facebook}
                                           target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a> : null
                                }
                            </li>
                            <li>
                                {
                                    item.twitter ?
                                        <a href={item.twitter}
                                           target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a> : null
                                }

                            </li>
                            <li>
                                {
                                    item.googlePlus ?
                                        <a href={item.googlePlus}
                                           target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faGooglePlus} />
                                        </a> : null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallTutor;