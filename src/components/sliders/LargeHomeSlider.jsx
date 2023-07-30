import React from 'react';
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const LargeHomeSlider = () => {
    const intervalForSwap = 2500;

    return (
        <Carousel
            nextIcon={
                <div className="home_slider_nav">
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
            }
            prevIcon={
                <div className="home_slider_nav">
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>
            }>
            <Carousel.Item interval={intervalForSwap}>
                <div className="home_slider_background home_slider_4"/>
                <div className="h-100 d-inline-block align-middle"/>
                <div className="w-100 d-inline-block align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="home_slider_title">
                                    Вы можете научиться чему угодно
                                </div>
                                <div className="courses_button trans_200">
                                    <NavLink to={COURSES_ROUTE}>
                                        Будь готов к обучению!
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={intervalForSwap}>
                <div className="home_slider_background home_slider_2"/>
                <div className="h-100 d-inline-block align-middle"/>
                <div className="w-100 d-inline-block align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="home_slider_title">
                                    Достигайте своих целей вместе с нашими
                                    опытными преподавателями
                                </div>
                                <div className="courses_button trans_200">
                                    <NavLink to={COURSES_ROUTE}>
                                        Наши курсы
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={intervalForSwap}>
                <div className="home_slider_background home_slider_5"/>
                <div className="h-100 d-inline-block align-middle"/>
                <div className="w-100 d-inline-block align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="home_slider_title">
                                    Образование нуждается в комплексном решении
                                </div>
                                <div className="courses_button trans_200">
                                    <NavLink to={COURSES_ROUTE}>
                                        Найти решение
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={intervalForSwap}>
                <div className="home_slider_background home_slider_3"/>
                <div className="h-100 d-inline-block align-middle"/>
                <div className="w-100 d-inline-block align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="home_slider_title">
                                    Лучшее образование для лучшего мира
                                </div>
                                <div className="courses_button trans_200">
                                    <NavLink to={COURSES_ROUTE}>
                                        Учись сейчас
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default LargeHomeSlider;