import React from 'react';
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const YouDontHaveCourses = () => {
    return (
        <div className="w-100 text-center mt-4" style={{fontSize: 16}}>
            Ничего нет. Возможно вам понравится что-то из доступных курсов.
            <div className="courses_button trans_200 mt-3">
                <NavLink to={COURSES_ROUTE}>
                    Все курсы
                </NavLink>
            </div>
        </div>
    );
};

export default YouDontHaveCourses;