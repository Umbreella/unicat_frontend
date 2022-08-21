import React from 'react';
import '../styles/responsive.css'
import NewsLetter from "../components/others/NewsLetter";
import NewsSection from "../components/news/NewsSection";
import TutorsSection from "../components/tutors/TutorsSection";
import EventsSection from "../components/events/EventsSection";
import CoursesSection from "../components/courses/CoursesSection";
import Slider from "../components/others/Slider";
import CounterSection from "../components/counter/CounterSection";

const Home = () => {
    return (
        <>
            <Slider />
            <CoursesSection />
            <CounterSection />
            <EventsSection />
            <TutorsSection />
            <NewsSection />
            <NewsLetter />
        </>
    );
};

export default Home;