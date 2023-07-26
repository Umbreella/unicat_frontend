import React, {useState} from 'react';
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink, useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import ContentCourseMenu from "../menu/ContentCourseMenu";
import ProfileMenu from "../menu/ProfileMenu";
import {LESSON_COURSE, MY_COURSES} from "../../utils/consts";

const ProfileMenuSidebar = (props) => {
    const {isVisibleSibeBarMenu, setIsVisibleSibeBarMenu} = props.data;

    const [isCollapsed, setIsCollapsed] = useState(false);
    const isMediumScreen = useMediaQuery({query: '(max-width: 768px)'})

    const hideSideBar = () => {
        if (isMediumScreen)
            setIsVisibleSibeBarMenu(!isVisibleSibeBarMenu);
    }

    return (
        <ProSidebar
            collapsed={isCollapsed}
            toggled={isVisibleSibeBarMenu}
            breakPoint="md"
            onToggle={hideSideBar}
        >
            <SidebarHeader>
                <FontAwesomeIcon
                    icon={isCollapsed ? faAngleRight : faAngleLeft}
                    style={{
                        width: 20,
                        height: 20,
                        padding: '15 30'
                    }}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                />
            </SidebarHeader>

            <SidebarContent style={{overflow: "hidden"}}>
                {
                    useLocation().pathname.match(MY_COURSES + ".+" + LESSON_COURSE + ".+") !== null ?
                        <ContentCourseMenu hideSideBar={hideSideBar}/> :
                        <ProfileMenu hideSideBar={hideSideBar}/>
                }
            </SidebarContent>

            <SidebarFooter style={{textAlign: "center"}}>
                <div className="navbar-brand"
                     style={{padding: 20}}>
                    <NavLink to="/">
                        {
                            isCollapsed ?
                                <>U</> :
                                <>Unic<span>at</span></>
                        }
                    </NavLink>
                </div>
            </SidebarFooter>
        </ProSidebar>

    );
};

export default ProfileMenuSidebar;