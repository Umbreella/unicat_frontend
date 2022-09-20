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

const TutorSidebar = () => {
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
                    <Image src={teacher} />
                </div>
                <div className="teacher_title">
                    <div className="teacher_name">
                        <NavLink to="#">
                            Jacke Masito
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
                <p>Hi! I am Masion, I’m a marketing & management eros pulvinar
                    velit laoreet, sit amet egestas erat dignissim. Sed quis
                    rutrum tellus, sit amet viverra felis. Cras sagittis sem
                    sit amet urna feugiat rutrum nam nulla ipsum.</p>
            </div>
        </div>
    );
};

export default TutorSidebar;