import React from 'react';
import {Accordion} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-regular-svg-icons";

const CurriculumAccordion = (props) => {
    const curriculum = props.curriculum;

    if (curriculum.childs === null){
        return (
            <div style={{fontSize: 16}}>
                <div className="accordion" style={{cursor: "auto"}}>
                    <FontAwesomeIcon icon={faFileLines}
                                     style={{paddingRight: 10}}/>
                    {curriculum.title}
                </div>
                <p style={{cursor: "auto"}}>
                    {curriculum.body}
                </p>
            </div>
        )
    }

    return (
        <>
            <Accordion>
                <Accordion.Header>
                    <div style={{fontSize: 16, fontFamily: 'Roboto,' +
                            ' sans-serif', lineHeight: 1.75}}>
                        <div >
                            <FontAwesomeIcon icon={faFileLines}
                                             style={{paddingRight: 10}}/>
                            {curriculum.title}
                        </div>
                        <p className="me-2">
                            {curriculum.body}
                        </p>
                    </div>
                </Accordion.Header>
                {
                    curriculum.childs?.map((value, index, array) =>
                        <Accordion.Body className="ps-4">
                            <CurriculumAccordion key={index}
                                                 curriculum={value}/>
                        </Accordion.Body>
                    )
                }
            </Accordion>
        </>
    );
};

export default CurriculumAccordion;