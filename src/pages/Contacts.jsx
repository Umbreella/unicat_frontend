import React from 'react';
import { YMaps, Map } from "react-yandex-maps";
import ContactForm from "../components/forms/ContactForm";

const Contacts = () => {
    return (
        <div className="contact">
            <div className="contact_map">
                <YMaps query={{ lang: 'en_RU' }}>
                    <div style={{
                        width: "100%",
                        height: 500
                    }}>
                        <Map
                            state={{
                                center: [55.76, 37.64],
                                zoom: 10,
                                controls: []
                            }}
                            width="100%"
                            height="500px"
                        />
                    </div>
                </YMaps>
            </div>
            <div className="contact_info_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_form">
                                <div className="contact_info_title">
                                    Напишите нам
                                </div>
                                <ContactForm />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact_info">
                                <div className="contact_info_title">Contact
                                    Info
                                </div>
                                <div className="contact_info_text">
                                    <p>It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a distribution of
                                        letters.</p>
                                </div>
                                <div className="contact_info_location">
                                    <div
                                        className="contact_info_location_title">New
                                        York Office
                                    </div>
                                    <ul className="location_list">
                                        <li>T8/480 Collins St, Melbourne VIC
                                            3000, New York
                                        </li>
                                        <li>1-234-567-89011</li>
                                        <li>info.deercreative@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="contact_info_location">
                                    <div
                                        className="contact_info_location_title">Australia
                                        Office
                                    </div>
                                    <ul className="location_list">
                                        <li>Forrest Ray, 191-103 Integer Rd,
                                            Corona Australia
                                        </li>
                                        <li>1-234-567-89011</li>
                                        <li>info.deercreative@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;