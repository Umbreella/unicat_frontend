import React from 'react';
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import SliderSearchForm from "../forms/SliderSearchForm";

const LargeHomeSlider = () => {
    const intervalForSwap = 2500;

    return (
        <Carousel 
            nextIcon={
                <div className="home_slider_nav">
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            }
            prevIcon={
                <div className="home_slider_nav">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            }>
            <Carousel.Item interval={intervalForSwap}>
                <div className="home_slider_background" />
                <div className="h-100 d-inline-block align-middle"/>
                <div className="w-100 d-inline-block align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="home_slider_title">The Premium System Education</div>
                                <div className="home_slider_subtitle">Будущее образовательных технологий</div>
                                <div className="home_slider_form_container">
                                    <SliderSearchForm />
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