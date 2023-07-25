import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGooglePlus,
    faTwitter,
    faVk
} from "@fortawesome/free-brands-svg-icons";

const SmallTutor = (props) => {
    const item = props.item;

    return (
        <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
                <div className="team_image">
                    <Image src={item.photo}/>
                </div>
                <div className="team_body">
                    <div className="team_title">
                        {item.fullName}
                    </div>
                    <NavLink className="team_title" to="/">
                    </NavLink>
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
                            <li>
                                {
                                    item.vk ?
                                        <a href={item.vk}
                                           target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon icon={faVk} />
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