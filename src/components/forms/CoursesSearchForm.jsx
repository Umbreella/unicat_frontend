import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import MultiRangeSlider from "../sliders/MultiRangeSlider";

const CoursesSearchForm = (props) => {
    const {categoriesFilter} = props.data;
    const {updateFilteredData} = props.func;

    const [searchText, setSearchText] = useState();
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [selectedOrderBy, setSelectedOrderBy] = useState();
    const [isVisibleFilters, setIsVisibleFilters] = useState(false);

    let minRating = 0;
    let maxRating = 5;
    let minPrice = 0;
    let maxPrice = 30000;

    const orderByTypes = [
        {
            value: "-created_at",
            displayValue: "Сначала новые",
        },
        {
            value: "created_at",
            displayValue: "Сначала старые",
        },
        {
            value: "price",
            displayValue: "По возр. цены",
        },
        {
            value: "-price",
            displayValue: "По убыв. цены",
        },
        {
            value: "statistic__avg_rating",
            displayValue: "По возр. рейтинга",
        },
        {
            value: "-statistic__avg_rating",
            displayValue: "По убыв. рейтинга",
        },
    ];

    return (
        <Form className="courses_search_form d-flex flex-row
                align-items-center justify-content-between"
              action="/" id="courses_search_form">
            <div className="w-100">
                <Row>
                    <Col className="d-flex flex-column flex-sm-row">
                        <Form.Control className="courses_search_input"
                                      type="search"
                                      placeholder="Название курса ..." required
                                      onChange={({target: {value}}) => {
                                          setSearchText(value)
                                      }}/>
                        <Form.Select
                            className="courses_search_select courses_search_input"
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
                        <Form.Select
                            className="courses_search_select courses_search_input"
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
                                        minRatingCourse: minRating,
                                        maxRatingCourse: maxRating,
                                        minPriceCourse: minPrice,
                                        maxPriceCourse: maxPrice,
                                    });
                                }}>
                            Поиск
                        </Button>
                    </Col>

                    <div
                        className="d-flex justify-content-end align-items-center mt-1"
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
                        <div style={{color: "#212529", fontSize: 16}}>
                            <Form.Group className="mt-3">
                                <Form.Label>
                                    Рейтинг
                                </Form.Label>
                                <MultiRangeSlider
                                    min={minRating}
                                    max={maxRating}
                                    step={0.5}
                                    onChange={({min, max}) => {
                                        minRating = min;
                                        maxRating = max;
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label>
                                    Цена
                                </Form.Label>
                                <MultiRangeSlider
                                    min={minPrice}
                                    max={maxPrice}
                                    step={1000}
                                    onChange={({min, max}) => {
                                        minPrice = min;
                                        maxPrice = max;
                                    }}
                                />
                            </Form.Group>

                        </div>
                    }
                </Row>
            </div>
        </Form>
    );
};

export default CoursesSearchForm;