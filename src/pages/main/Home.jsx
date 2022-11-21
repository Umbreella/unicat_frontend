import React from 'react';
import '../../styles/responsive.css'
import NewsSection from "../../components/news/NewsSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import EventsSection from "../../components/events/EventsSection";
import CoursesSection from "../../components/courses/CoursesSection";
import LargeHomeSlider from "../../components/sliders/LargeHomeSlider";
import CounterSection from "../../components/counter/CounterSection";
import {getFirstCourse} from "../../http/CourseApi";
import {getFirstTeacher} from "../../http/TeacherApi";
import {useQuery} from "@apollo/client";
import {createQuery} from "../../http";

const Home = () => {
    const coursesQuery = getFirstCourse(3, "");
    const teachersQuery = getFirstTeacher(4);

    const {data} = useQuery(createQuery([coursesQuery, teachersQuery]))

    return (
        <>
            <LargeHomeSlider />
            <CoursesSection data={data?.allCourses}/>
            <CounterSection />
            <EventsSection />
            <TutorsSection data={data?.allTeachers}/>
            <NewsSection />
        </>
    );
};

export default Home;