import React from 'react';
import {Button, Form} from "react-bootstrap";

const SliderSearchForm = () => {
    return (
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
    );
};

export default SliderSearchForm;