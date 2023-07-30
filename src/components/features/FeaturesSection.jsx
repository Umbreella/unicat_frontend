import React from 'react';
import TitleSection from "../others/TitleSection";
import {Accordion, Col, Row} from "react-bootstrap";
import SmallAccordion from "../accordions/SmallAccordion";

const FeaturesSection = () => {
    const section = {
        title: "Почему нужно выбрать именно нас",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    const accordions = [
        {
            header: "Солнечных дней всё меньше",
            body: "Также как граница обучения кадров требует от нас анализа" +
                " вывода текущих активов.",
        },
        {
            header: "Финансовый мир очнулся: логотип крупнейшей компании по" +
                " производству мыльных пузырей обнадёживает",
            body: "Современные технологии достигли такого уровня, что новая" +
                " модель организационной деятельности обеспечивает широкому" +
                " кругу (специалистов) участие в формировании благоприятных" +
                " перспектив.",
        },
        {
            header: "Давайте не будем укрепляться в мысли, что обучение" +
                " кадров — приоритетная задача",
            body: "Равным образом, начало повседневной работы по" +
                " формированию позиции играет определяющее значение для" +
                " инновационных методов управления процессами.",
        },
        {
            header: "Давайте не будем укрепляться в мысли, что обучение" +
                " кадров — приоритетная задача",
            body: "Равным образом, начало повседневной работы по" +
                " формированию позиции играет определяющее значение для" +
                " инновационных методов управления процессами.",
        },
    ]

    return (
        <div className="feature">
            <div className="feature_background"/>
            <div className="container">
                <TitleSection section={section}/>
                <Row className="feature_row d-flex justify-content-between">
                    <Col className="col-12 col-lg-5">
                        <Accordion className="accordions"
                                   defaultActiveKey={ Math.floor(Math.random() * accordions.length)}>
                            {
                                accordions.map((value, index, array) =>
                                    <SmallAccordion key={index} item={{
                                        ...value,
                                        eventKey: index,
                                    }}/>
                                )
                            }
                        </Accordion>
                    </Col>
                    <Col className="col-12 col-lg-6 d-none d-lg-block">
                        <div className="feature_video_background" style={{height: '75%'}}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FeaturesSection;