import React from 'react';
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {MY_COURSES} from "../../utils/consts";

const ContentCourseMenu = (props) => {
    const hideSideBar = props.hideSideBar;

    const contentCourse = [
        {
            icon: "1",
            title: "Введение",
            isComplete: true,
            subContent: [
                {
                    icon: "1.1",
                    title: "Установка",
                    link: "#",
                    isComplete: false
                },
                {
                    icon: "1.2",
                    title: "Настройка",
                    link: "#",
                    isComplete: true
                }
            ]
        },
        {
            icon: "2",
            title: "Первые программы",
            isComplete: true,
            subContent: [
                {
                    icon: "2.1",
                    title: "Hello World",
                    link: "#",
                    isComplete: false
                },
                {
                    icon: "2.2",
                    title: "First Project",
                    link: "#",
                    isComplete: true
                }
            ]
        }
    ]

    const getIcon = (item) => {
        return <div style={{ fontSize: 15 }}>{item.icon}.</div>;
    }
    const getSuffix = (item) => {
        return item.isComplete ? <FontAwesomeIcon icon={faCheck} /> : null;
    }

    return (
        <Menu>
            {/*const navigate = useNavigate();*/}

            {/*return (*/}
            {/*<div>*/}
            {/*    <button onClick={() => navigate(-1)}>Go back</button>*/}
            {/*    <button onClick={() => navigate(1)}>Go forward</button>*/}
            {/*    */}

            <MenuItem icon={<FontAwesomeIcon icon={faArrowLeft}/>}>
                <NavLink to={MY_COURSES} onClick={hideSideBar}>
                    Вернуться
                </NavLink>
            </MenuItem>
            {
                contentCourse.map((value, index, array) =>
                    {
                        return (
                            <SubMenu key={index}
                                     title={value.title}
                                     icon={getIcon(value)}
                                     suffix={getSuffix(value)} >
                                {
                                    value.subContent?.map((value, index, array) =>
                                        <MenuItem key={index}
                                                  icon={getIcon(value)}
                                                  suffix={getSuffix(value)}>
                                            <NavLink to={value.link}
                                                     onClick={hideSideBar}>
                                                {value.title}
                                            </NavLink>
                                        </MenuItem>
                                    )
                                }
                            </SubMenu>
                        );
                    }
                )
            }
        </Menu>
    );
};

export default ContentCourseMenu;