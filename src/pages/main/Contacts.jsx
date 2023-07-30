import React, {useEffect} from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import ContactForm from "../../components/forms/ContactForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelopeOpen,
    faLocation,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
    const coordinates = [54.987787, 73.376913];

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="contact">
            <div className="contact_map">
                <YMaps query={{lang: 'en_RU'}}>
                    <div style={{
                        width: "100%",
                        height: 500
                    }}>
                        <Map
                            defaultState={{
                                center: coordinates,
                                zoom: 12,
                            }}
                            width="100%"
                            height="500px"
                        >
                            <Placemark geometry={coordinates}/>
                        </Map>
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
                                <ContactForm/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact_info">
                                <div className="contact_info_title">
                                    Контактная информация
                                </div>
                                <div className="contact_info_text">
                                    В рамках спецификации современных
                                    стандартов, многие известные личности
                                    формируют глобальную экономическую сеть и
                                    при этом — функционально разнесены на
                                    независимые элементы. Ясность нашей позиции
                                    очевидна: сложившаяся структура организации
                                    создаёт предпосылки для инновационных
                                    методов управления процессами.
                                </div>
                                <div className="contact_info_location">
                                    <div
                                        className="contact_info_location_title">
                                        Центральный офис
                                    </div>
                                    <ul className="location_list">
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faPhone}/>
                                            <div>
                                                139(1154)426-98-52723
                                            </div>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faEnvelopeOpen}/>
                                            <div>
                                                xeipeittaffazu@umbreella-dev.ru
                                            </div>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faLocation}/>
                                            <div>
                                                Россия, г. Омск, проезд
                                                Чехова, 73
                                            </div>
                                        </li>
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