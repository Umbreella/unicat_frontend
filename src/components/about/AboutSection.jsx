import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeAbout from "./LargeAbout";

const AboutSection = () => {
    const section = {
        title: "Добро пожаловать на Unicat",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit. Donec vel gravida arcu Vestibulum"
    }

    return (
        <div className="about">
            <Container>
                <TitleSection section={section}/>
                <Row className="about_row">
                    <LargeAbout />
                    <LargeAbout />
                    <LargeAbout />
                </Row>
            </Container>
        </div>
    );
};

export default AboutSection;