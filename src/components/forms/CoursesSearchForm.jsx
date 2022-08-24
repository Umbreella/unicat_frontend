import React from 'react';
import {Button, Form} from "react-bootstrap";

const CoursesSearchForm = () => {
    return (
        <Form className="courses_search_form d-flex flex-row
                align-items-center justify-content-between"
              action="/" id="courses_search_form">
            <Form.Control className="courses_search_input" type="search"
                          placeholder="Поиск" required />
            <Form.Select className="courses_search_select courses_search_input"
                         id="courses_search_select">
                <option>All Categories</option>
                <option>Category</option>
                <option>Category</option>
                <option>Category</option>
            </Form.Select>
            <Button className="courses_search_button ml-auto">
                Поиск
            </Button>
        </Form>
    );
};

export default CoursesSearchForm;