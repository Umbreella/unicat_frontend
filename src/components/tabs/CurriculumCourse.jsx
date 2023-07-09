import React from 'react';
import PublicLessonAccordion from "../accordions/PublicLessonAccordion";
import HorizontalLoader from "../loader/HorizontalLoader";
import ErrorLazyQuery from "../errors/ErrorLazyQuery";

const CurriculumCourse = (props) => {
    const {query:  {error ,loading, data}} = props.data;

    if (error) {
        return <ErrorLazyQuery/>
    }

    if (loading) {
        return <HorizontalLoader/>
    }

    return (
        <>
            {
                data?.lessonsByCourse.map((value) =>
                    <PublicLessonAccordion key={value.id} data={value}/>
                )
            }
        </>
    );
};

export default CurriculumCourse;