import React, {useContext, useReducer} from 'react';
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCheck} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {LESSON_COURSE, MY_COURSES} from "../../utils/consts";
import {Context} from "../../index";

const ContentCourseMenu = (props) => {
    const hideSideBar = props.hideSideBar;
    const context = useContext(Context);
    const [courseMenuItems, setCourseMenuItems] = useReducer((state, action) => action, {courseId: "", lessons: []});
    context.setCourseMenuItems = setCourseMenuItems;

    const url = MY_COURSES + courseMenuItems.courseId + LESSON_COURSE;

    const getIcon = (item) => {
        return <div style={{fontSize: 15}}>{item.serialNumber}</div>;
    }
    const getSuffix = (item) => {
        return item.isCompleted ? <FontAwesomeIcon icon={faCheck}/> : null;
    }

    return (
        <Menu>
            <MenuItem icon={<FontAwesomeIcon icon={faArrowLeft}/>}>
                <NavLink to={MY_COURSES} onClick={hideSideBar}>
                    Мои курсы
                </NavLink>
            </MenuItem>
            {
                courseMenuItems.lessons.map((value, index, array) => {
                    if (value.children?.length > 0)
                        return (
                            <SubMenu key={index}
                                     title={value.title}
                                     icon={getIcon(value)}
                                     suffix={getSuffix(value)}>
                                {
                                    value.children.map((value, index, array) =>
                                        <MenuItem key={index}
                                                  icon={getIcon(value)}
                                                  suffix={getSuffix(value)}>
                                            <NavLink to={url + value.id}
                                                     onClick={hideSideBar}>
                                                {value.title}
                                            </NavLink>
                                        </MenuItem>
                                    )
                                }
                            </SubMenu>
                        )

                    return (
                        <MenuItem key={index}
                                  icon={getIcon(value)}
                                  suffix={getSuffix(value)}>
                            <NavLink to={url + value.id}
                                     onClick={hideSideBar}>
                                {value.title}
                            </NavLink>
                        </MenuItem>
                    )
                })
            }
        </Menu>
    );
};

export default ContentCourseMenu;