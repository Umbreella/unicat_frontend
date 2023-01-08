import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faSliders} from "@fortawesome/free-solid-svg-icons";

const CoursesSearchForm = (props) => {
    const {categoriesFilter} = props.data;
    const {updateFilteredData} = props.func;

    const [searchText, setSearchText] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [selectedOrderBy, setSelectedOrderBy] = useState("");
    const [isVisibleFilters, setIsVisibleFilters] = useState(false);

    const orderByTypes = [
        {
            value: "price",
            displayValue: "По возр. цены",
        },
        {
            value: "-price",
            displayValue: "По убыв. цены",
        },
    ];

    return (
        <Form className="courses_search_form d-flex flex-row
                align-items-center justify-content-between"
              action="/" id="courses_search_form">
            <div className="w-100">
                <Row>
                    <Col className="d-flex">
                        <Form.Control className="courses_search_input" type="search"
                                      placeholder="Название курса ..." required
                                      onChange={({target: {value}}) => {
                                          setSearchText(value)
                                      }}/>
                        <Form.Select className="courses_search_select courses_search_input"
                                     onChange={({target: {value}}) => {
                                         setSelectedCategoryId(value);
                                     }}>
                            <option value="">- Категория -</option>
                            {
                                categoriesFilter.map(({node}) =>
                                    <option key={node.id} value={node.id}>
                                        {node.title}
                                    </option>)
                            }
                        </Form.Select>
                        <Form.Select className="courses_search_select courses_search_input"
                                     onChange={({target: {value}}) => {
                                         setSelectedOrderBy(value);
                                     }}>
                            <option value="">- Сортировка -</option>
                            {
                                orderByTypes.map(({value, displayValue}) =>
                                    <option key={value} value={value}>
                                        {displayValue}
                                    </option>)
                            }
                        </Form.Select>
                        <Button className="courses_search_button ml-auto"
                                style={{
                                    minWidth: 100
                                }}
                                onClick={() => {
                                    updateFilteredData({
                                        searchCourse: searchText,
                                        categoryIdFilter: selectedCategoryId,
                                        orderByCourse: selectedOrderBy,
                                    });
                                }}>
                            Поиск
                        </Button>
                    </Col>

                    <div className="d-flex justify-content-end align-items-center mt-1"
                         style={{
                             cursor: "pointer",
                             userSelect: "none"
                         }}
                         onClick={() => {
                             setIsVisibleFilters(!isVisibleFilters);
                         }}>
                        <FontAwesomeIcon icon={faSliders} className="me-1"/>
                        Все фильтры
                    </div>

                    {
                        isVisibleFilters &&
                            <div>
                                <Form.Group>
                                    <Form.Label>
                                        Преподаватель
                                    </Form.Label>
                                    <Form.Select className="courses_search_select courses_search_input"
                                                 onChange={({target: {value}}) => {
                                                     // setSelectedCategoryId(value);
                                                 }}>
                                        <option value="">-  -</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Рейтинг
                                    </Form.Label>
                                    <Form.Range min={10} max={20} onChange={({target: {value}}) => {
                                        console.log(value)
                                    }}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Цена
                                    </Form.Label>
                                    <Form.Range min={10} max={20} onChange={({target: {value}}) => {
                                        console.log(value)
                                    }}/>
                                </Form.Group>

                            </div>
                    }
                </Row>
            </div>
        </Form>
    );
};

export default CoursesSearchForm;