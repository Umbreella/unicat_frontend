import React from 'react';
import teacher from "../../images/teacher.jpg";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {
    faComment,
    faStar,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import TutorMetaLine from "../tutors/TutorMetaLine";

const TutorSidebar = (props) => {
    const data = props.data;

    const metaParams = [
        {
            title: "Средний рейтинг",
            value: "4.6",
            icon: faStar
        },
        {
            title: "Отзывов",
            value: "10 тыс.",
            icon: faComment
        },
        {
            title: "Выпускников",
            value: "600",
            icon: faUsers
        }
    ]

    return (
        <div className="sidebar_teacher">
            <div
                className="teacher_title_container d-flex flex-row align-items-center justify-content-start"
                >
                <div className="teacher_image">
                    <Image src={data.photo} />
                </div>
                <div className="teacher_title">
                    <div className="teacher_name">
                        <NavLink to="#">
                            {data.fullName}
                        </NavLink>
                    </div>
                    <div className="teacher_position">
                        Marketing & Management
                    </div>
                </div>
            </div>
            <div className="teacher_meta_container">
                {
                    metaParams.map((value, index, array) =>
                        <TutorMetaLine key={index} tutorMeta={value} />
                    )
                }
            </div>
            <div className="teacher_info">
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    );
};

export default TutorSidebar;