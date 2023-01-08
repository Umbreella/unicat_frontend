import React, {useEffect} from 'react';
import '../../styles/responsive.css'
import LatestNewsSection from "../../components/news/LatestNewsSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import LatestEventsSection from "../../components/events/LatestEventsSection";
import CoursesSection from "../../components/courses/CoursesSection";
import LargeHomeSlider from "../../components/sliders/LargeHomeSlider";
import CounterSection from "../../components/counter/CounterSection";
import {getCourses} from "../../http/graphql/CourseGQL";
import {getTeacher} from "../../http/graphql/TeacherGQL";
import {gql, useQuery} from "@apollo/client";
import {getEvents} from "../../http/graphql/EventGQL";
import {getNews} from "../../http/graphql/NewsGQL";
import PageLoader from "../../components/loader/PageLoader";

const Home = () => {
    const coursesQuery = getCourses();
    const eventsQuery = getEvents();
    const teachersQuery = getTeacher();
    const newsQuery = getNews()

    const resultQuery = gql`
        query HomePage($firstCourse: Int, $afterCourse: String, $searchCourse: String, $categoryIdFilter: String, $orderByCourse: String,
                       $firstEvent: Int, $afterEvent: String,
                       $firstTeacher: Int, $afterTeacher: String,
                       $firstNews: Int, $afterNews: String) {
            ${coursesQuery}
            ${eventsQuery}
            ${teachersQuery}
            ${newsQuery}
        }
    `;
    const {loading, data} = useQuery(resultQuery, {variables: {
            firstCourse: 3,
            firstEvent: 3,
            firstTeacher: 4,
            firstNews: 5,
        }});

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            {
                loading ?
                    <PageLoader/> :
                    <>
                        <LargeHomeSlider/>
                        <CoursesSection data={data.allCourses}/>
                        <CounterSection/>
                        <LatestEventsSection data={data.allEvents}/>
                        <TutorsSection data={data.allTeachers}/>
                        <LatestNewsSection data={data.allNews}/>
                    </>
            }
        </>
    );
};

export default Home;