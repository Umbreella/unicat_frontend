import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const MyCoursesOrderByForm = (props) => {
    const {updateFilteredData} = props.func;
    const [searchText, setSearchText] = useState();
    const [selectedComplete, setSelectedComplete] = useState();
    const [selectedOrderBy, setSelectedOrderBy] = useState("");

    const completeTypes = [
        {
            value: true,
            displayValue: "Есть сертификат",
        },
        {
            value: false,
            displayValue: "Нет сертификата",
        },
    ];

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
            value: "-last_view",
            displayValue: "Сначала недавно просмотренные",
        },
        {
            value: "last_view",
            displayValue: "Сначала давно просмотренные",
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
                                         setSelectedComplete(JSON.parse(value));
                                     }}>
                            <option value="null">- Статус -</option>
                            {
                                completeTypes.map(({value, displayValue}) =>
                                    <option key={value} value={value}>
                                        {displayValue}
                                    </option>)
                            }
                        </Form.Select>
                        <Form.Select className="courses_search_select courses_search_input"
                                     onChange={({target: {value}}) => {
                                         setSelectedOrderBy(value);
                                     }}>
                            <option value="null">- Сортировка -</option>
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
                                        searchMyCourse: searchText,
                                        isCompletedMyCourse: selectedComplete,
                                        orderByMyCourse: selectedOrderBy,
                                    });
                                }}>
                            Поиск
                        </Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
};

export default MyCoursesOrderByForm;