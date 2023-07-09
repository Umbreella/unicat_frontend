import React from 'react';
import {Accordion} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines} from "@fortawesome/free-regular-svg-icons";
import {
    faBookOpen, faCheck,
    faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {LESSON_COURSE, MY_COURSES} from "../../utils/consts";

const PrivateLessonAccordion = (props) => {
    const {info, item} = props.data;
    const navigate = useNavigate();

    const getIcon = () => {
        let icon;

        switch (item.lessonType) {
            case "theme":
                icon = faGraduationCap;
                break;
            case "theory":
                icon = faBookOpen;
                break;
            default:
                icon = faFileLines;
                break;
        }

        return <FontAwesomeIcon icon={icon}
                                style={{
                                    width: 20,
                                    paddingRight: 10,
                                }}/>
    }

    const getIsCompleteIcon = () => {
        return (
            <>
                {
                    item.isCompleted && <FontAwesomeIcon icon={faCheck}/>
                }
            </>
        )
    }

    if (!('children' in item) || item.children?.length === 0) {
        return (
            <div
                className="accordion d-flex justify-content-between align-content-center"
                style={{
                    cursor: "pointer",
                    fontSize: 16,
                    paddingTop: 16,
                    paddingBottom: 16,
                }}
                onClick={() => navigate(MY_COURSES + info + LESSON_COURSE + item.id)}>
                <div>
                    {
                        getIcon()
                    }
                    {item.title}
                </div>
                <div>
                    {
                        getIsCompleteIcon()
                    }
                </div>
            </div>
        )
    }

    return (
        <>
            <Accordion key={item.id}>
                <Accordion.Header>
                    <div
                        className="d-flex justify-content-between w-100 align-content-center"
                        style={{
                            fontSize: 16,
                            fontFamily: 'Roboto, sans-serif',
                            lineHeight: 1.75
                        }}>
                        <div>
                            {
                                getIcon()
                            }
                            {item.title}
                        </div>
                        <div className="me-2">
                            {
                                getIsCompleteIcon()
                            }
                        </div>
                    </div>
                </Accordion.Header>
                {
                    item.children?.map((value) =>
                        <Accordion.Body key={value.id}
                                        style={{
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        }}>
                            <PrivateLessonAccordion data={{
                                info: info,
                                item: value,
                            }}/>
                        </Accordion.Body>
                    )
                }
            </Accordion>
        </>
    );
};

export default PrivateLessonAccordion;