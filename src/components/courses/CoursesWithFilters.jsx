import React, {useState} from 'react';
import CoursesSearchForm from "../forms/CoursesSearchForm";
import {Col, Pagination, Row} from "react-bootstrap";
import LargeCourse from "./LargeCourse";

const CoursesWithFilters = (props) => {
    const data = props.data;
    const setEndCursor = props.setEndCursor;

    const [numberCurrentPage, setNumberCurrentPage] = useState(1)

    return (
        <>
            <div className="courses_search_container">
                <CoursesSearchForm/>
            </div>
            <div className="courses_container">
                <Row className="courses_row">
                    {
                        data?.edges.map(({node}, index, array) =>
                            <LargeCourse key={node.id}
                                         item={node}
                                         style={{col: "col-lg-6"}}/>
                        )
                    }
                </Row>
                <Row className="pagination_row">
                    <Col>
                        <div
                            className="pagination_container d-flex flex-row align-items-center justify-content-start">
                            <Pagination className="mx-auto">
                                <Pagination.Prev/>
                                <Pagination.Item>
                                    {numberCurrentPage}
                                </Pagination.Item>
                                {
                                    data?.pageInfo.hasNextPage ?
                                        <Pagination.Next onClick={() => setEndCursor(data?.pageInfo.endCursor)}/> :
                                        <></>
                                }
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CoursesWithFilters;