import React, {useState} from 'react';
import CoursesSearchForm from "../forms/CoursesSearchForm";
import {Row} from "react-bootstrap";
import LargeCourse from "./LargeCourse";
import HorizontalLoader from "../loader/HorizontalLoader";

const CoursesWithFilters = (props) => {
    const {allCategories, allCourses} = props.data;
    const {loadMoreCourse, updateFilteredData} = props.func;

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    return (
        <>
            <div className="courses_search_container">
                <CoursesSearchForm
                    data={{
                        categoriesFilter: allCategories.edges,
                    }}
                    func={{
                        updateFilteredData: updateFilteredData,
                    }}/>
            </div>
            <div className="courses_container">
                <Row className="courses_row">
                    {
                        allCourses.edges.length === 0 ?
                            <div className="d-flex justify-content-center">
                                <div style={{textAlign: "center"}}>
                                    <h6 className="m-2">
                                        Не удалось найти подходящие курсы
                                    </h6>
                                    Попробуйте изменить критерии поиска
                                </div>
                            </div> :
                            <>
                                {
                                    allCourses.edges.map(({node}) =>
                                        <LargeCourse key={node.id} item={node}
                                                     style={{col: "col-lg-6"}}/>
                                    )
                                }
                            </>
                    }
                </Row>
                {
                    isLoadingMore ?
                        <>
                            <HorizontalLoader/>
                        </> :
                        <>
                            {
                                allCourses.pageInfo.hasNextPage &&
                                <div className="courses_button trans_200"
                                     onClick={() => {
                                         setIsLoadingMore(true);
                                         loadMoreCourse(allCourses.pageInfo.endCursor);
                                         setIsLoadingMore(false);
                                     }}>
                                    Загрузить ещё
                                </div>
                            }
                        </>
                }
            </div>
        </>
    );
};

export default CoursesWithFilters;