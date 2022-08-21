import React from 'react';
import {Button, Carousel, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
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
                                    <Form className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
                                        <div className="d-flex flex-row align-items-center justify-content-start">
                                            <Form.Control className="home_search_input"
                                                          type="search" placeholder="Поиск"/>
                                            <Form.Select className="dropdown_item_select home_search_input">
                                                <option></option>
                                            </Form.Select>
                                            <Form.Select className="dropdown_item_select home_search_input">
                                                <option></option>
                                            </Form.Select>
                                        </div>
                                        <Button className="home_search_button"
                                                type="submit" variant="light">
                                            Найти
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;