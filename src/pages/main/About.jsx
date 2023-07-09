import React, {useEffect} from 'react';
import TutorsSection from "../../components/tutors/TutorsSection";
import PartnersSection from "../../components/partners/PartnersSection";
import AboutSection from "../../components/about/AboutSection";
import FeaturesSection from "../../components/features/FeaturesSection";
import {gql, useQuery} from "@apollo/client";
import {getTeacher} from "../../http/graphql/TeacherGQL";
import PageLoader from "../../components/loader/PageLoader";
import ErrorQuery from "../../components/errors/ErrorQuery";

const About = () => {
    const teacherQuery = getTeacher();

    const resultQuery = gql`
        query AboutPage($firstTeacher: Int, $afterTeacher: String) {
            ${teacherQuery}
        }
    `;
    const {error, loading, data} = useQuery(resultQuery, {
        variables: {
            firstTeacher: 4,
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
                        <AboutSection />
                        <FeaturesSection />
                        <TutorsSection data={data.allTeachers}
                                       style={{background: "#ffffff"}}/>
                        <PartnersSection />
                    </>
            }
        </>
    );
};

export default About;