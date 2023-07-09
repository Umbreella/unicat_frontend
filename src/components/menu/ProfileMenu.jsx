import React from 'react';
import {Menu, MenuItem} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAward,
    faBookOpen, faGear,
    faHouse, faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {
    MY_COURSES,
    PROFILE,
    CERTIFICATES, SETTINGS, MY_PAYMENTS
} from "../../utils/consts";

const ProfileMenu = (props) => {
    const hideSideBar = props.hideSideBar;

    return (
        <Menu>
            <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
                <NavLink to={PROFILE} onClick={hideSideBar}>
                    Мое обучение
                </NavLink>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faBookOpen} />}>
                <NavLink to={MY_COURSES} onClick={hideSideBar}>
                    Курсы
                </NavLink>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faAward} />}>
                <NavLink to={CERTIFICATES} onClick={hideSideBar}>
                    Сертификаты
                </NavLink>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faMoneyBill} />}>
                <NavLink to={MY_PAYMENTS} onClick={hideSideBar}>
                    Платежи
                </NavLink>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faGear} />}>
                <NavLink to={SETTINGS} onClick={hideSideBar}>
                    Настройки
                </NavLink>
            </MenuItem>
        </Menu>
    );
};

export default ProfileMenu;