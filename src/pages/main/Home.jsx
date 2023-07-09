import React, {useEffect} from 'react';
import '../../styles/responsive.css'
import LatestNewsSection from "../../components/news/LatestNewsSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import LatestEventsSection from "../../components/events/LatestEventsSection";
import CoursesSection from "../../components/courses/CoursesSection";
import LargeHomeSlider from "../../components/sliders/LargeHomeSlider";
import {getCourses} from "../../http/graphql/CourseGQL";
import {getTeacher} from "../../http/graphql/TeacherGQL";
import {gql, useQuery} from "@apollo/client";
import {getEvents} from "../../http/graphql/EventGQL";
import {getNews} from "../../http/graphql/NewsGQL";
import PageLoader from "../../components/loader/PageLoader";
import {Col, Container, Row} from "react-bootstrap";
import ErrorQuery from "../../components/errors/ErrorQuery";

const Home = () => {
    const coursesQuery = getCourses();
    const eventsQuery = getEvents();
    const teachersQuery = getTeacher();
    const newsQuery = getNews()

    const resultQuery = gql`
        query HomePage($firstCourse: Int, $afterCourse: String, 
                       $searchCourse: String, $categoryIdFilter: String, $orderByCourse: String,
                       $minRatingCourse: Decimal, $maxRatingCourse: Decimal,
                       $minPriceCourse: Decimal, $maxPriceCourse: Decimal,
                       
                       $firstEvent: Int, $afterEvent: String,
                       
                       $firstTeacher: Int, $afterTeacher: String,
                       
                       $firstNews: Int, $afterNews: String) {
            ${coursesQuery}
            ${eventsQuery}
            ${teachersQuery}
            ${newsQuery}
        }
    `;
    const {error, loading, data} = useQuery(resultQuery, {
        variables: {
            firstCourse: 3,
            firstEvent: 3,
            firstTeacher: 4,
            firstNews: 5,
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    if (error) {
        return <ErrorQuery/>;
    }

    return (
        <>
            {
                loading ?
                    <PageLoader/> :
                    <>
                        <LargeHomeSlider/>
                        {
                            data.allCourses.edges.length > 0 &&
                            <CoursesSection data={data.allCourses}/>
                        }
                        {
                            data.allEvents.edges.length > 0 &&
                            <LatestEventsSection data={data.allEvents}/>
                        }
                        {
                            data.allTeachers.edges.length > 0 &&
                            <TutorsSection data={data.allTeachers}/>
                        }
                        {
                            data.allNews.edges.length > 0 &&
                            <LatestNewsSection data={data.allNews}/>
                        }
                    </>
            }
        </>
    );
};

export default Home;