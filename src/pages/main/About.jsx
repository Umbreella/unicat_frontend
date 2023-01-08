import React, {useEffect} from 'react';
import CounterSection from "../../components/counter/CounterSection";
import TutorsSection from "../../components/tutors/TutorsSection";
import PartnersSection from "../../components/partners/PartnersSection";
import AboutSection from "../../components/about/AboutSection";
import FeaturesSection from "../../components/features/FeaturesSection";
import {gql, useQuery} from "@apollo/client";
import {getTeacher} from "../../http/graphql/TeacherGQL";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import PageLoader from "../../components/loader/PageLoader";

const About = () => {
    const teacherQuery = getTeacher();

    const resultQuery = gql`
        query AboutPage($firstTeacher: Int, $afterTeacher: String) {
            ${teacherQuery}
        }
    `;
    const {loading, data} = useQuery(resultQuery, {
        variables: {
            firstTeacher: 4,
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            {
                loading ?
                    <PageLoader/> :
                    <>
                        <AboutSection />
                        <FeaturesSection />
                        <TutorsSection data={data.allTeachers}
                                       style={{background: "#ffffff"}}/>
                        <CounterSection />
                        <PartnersSection />
                    </>
            }
        </>
    );
};

export default About;