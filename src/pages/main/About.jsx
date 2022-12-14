import React, {useEffect} from 'react';
import CounterSection from "../../components/counter/CounterSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import PartnersSection from "../../components/partners/PartnersSection";
import AboutSection from "../../components/about/AboutSection";
import FeaturesSection from "../../components/features/FeaturesSection";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <AboutSection />
            <FeaturesSection />
            <TutorsSection style={{background: "#FFFFFF"}}/>
            <CounterSection />
            <PartnersSection />
        </>
    );
};

export default About;