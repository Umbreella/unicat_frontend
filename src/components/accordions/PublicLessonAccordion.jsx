import React from 'react';
import {Accordion} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-regular-svg-icons";

const PublicLessonAccordion = (props) => {
    const data = props.data;

    if (data.children === undefined || data.children?.length === 0) {
        return (
            <div className="accordion" style={{
                fontSize: 16,
                paddingTop: 16,
                paddingBottom: 16,
            }}>
                <div
                >
                    <FontAwesomeIcon icon={faFileLines}
                                     style={{paddingRight: 10}}/>
                    {data.title}
                </div>
                <p style={{cursor: "auto"}}>
                    {data.description}
                </p>
            </div>
        )
    }

    return (
        <>
            <Accordion key={data.id}>
                <Accordion.Header>
                    <div style={{
                        fontSize: 16,
                        fontFamily: 'Roboto, sans-serif',
                        lineHeight: 1.75
                    }}>
                        <div>
                            <FontAwesomeIcon icon={faFileLines}
                                             style={{paddingRight: 10}}/>
                            {data.title}
                        </div>
                        <p className="me-2">
                            {data.description}
                        </p>
                    </div>
                </Accordion.Header>
                {
                    data.children?.map((value) =>
                        <Accordion.Body key={value.id}
                                        style={{
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        }}>
                            <PublicLessonAccordion data={value}/>
                        </Accordion.Body>
                    )
                }
            </Accordion>
        </>
    );
};

export default PublicLessonAccordion;