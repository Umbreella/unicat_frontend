import React from 'react';
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
    return (
        <Form className="header_search_form">
            <Form.Control className="search_input"
                          type="search" placeholder="Поиск"/>
            <div className="header_search_button d-flex flex-column
                                                    align-items-center justify-content-center">
                <FontAwesomeIcon icon={faSearch} style={{marginLeft: 0}}/>
            </div>
        </Form>
    );
};

export default SearchForm;