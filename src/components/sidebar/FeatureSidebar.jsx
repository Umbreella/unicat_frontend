import React from 'react';
import {
    faClock,
    faFileText, faListAlt,
    faQuestionCircle, faUsers
} from "@fortawesome/free-solid-svg-icons";
import FeaturesSidebarLine from "../features/FeaturesSidebarLine";

const FeatureSidebar = (props) => {
    const data = props.data;

    const features = [
        {
            title: 'Длительность',
            value: data.duration,
            icon: faClock
        },
        {
            title: 'Кол-во лекций',
            value: data.countLectures,
            icon: faFileText
        },
        {
            title: 'Кол-во самостоятельных работ',
            value: data.countIndependents,
            icon: faQuestionCircle
        },
        {
            title: 'Формат обучения',
            value: data.learningFormat,
            icon: faListAlt
        },
        // {
        //     title: 'Кол-во в группе',
        //     value: '35',
        //     icon: faUsers
        // }
    ]

    return (
        <div className="sidebar_feature">
            <div className="course_price"
                 style={{marginTop: 30, fontSize: 24}}>
                {data.price}₽
            </div>
            <div className="feature_list">
                {
                    features.map((value, index, array) =>
                        <FeaturesSidebarLine key={index} feature={value}/>
                    )
                }
            </div>
        </div>
    );
};

export default FeatureSidebar;