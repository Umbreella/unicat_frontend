import React, {useEffect} from 'react';
import '../../styles/responsive.css'
import NewsSection from "../../components/news/NewsSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import EventsSection from "../../components/events/EventsSection";
import CoursesSection from "../../components/courses/CoursesSection";
import LargeHomeSlider from "../../components/sliders/LargeHomeSlider";
import CounterSection from "../../components/counter/CounterSection";
import {getFirstCourses} from "../../http/CourseApi";
import {getFirstTeacher} from "../../http/TeacherApi";
import {useQuery} from "@apollo/client";
import {createQuery} from "../../http";
import {getFirstEvents} from "../../http/EventApi";

const Home = () => {
    const coursesQuery = getFirstCourses(3, "");
    const eventsQuery = getFirstEvents(3);
    const teachersQuery = getFirstTeacher(4);

    const {data} = useQuery(createQuery([coursesQuery, eventsQuery, teachersQuery]))

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <LargeHomeSlider/>
            <CoursesSection data={data?.allCourses}/>
            <CounterSection/>
            <EventsSection data={data?.allEvents}/>
            <TutorsSection data={data?.allTeachers}/>
            <NewsSection/>
        </>
    );
};

export default Home;