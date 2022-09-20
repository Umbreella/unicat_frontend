import React from 'react';
import {
    faClock,
    faFileText, faListAlt,
    faQuestionCircle, faUsers
} from "@fortawesome/free-solid-svg-icons";
import FeaturesSidebarLine from "../features/FeaturesSidebarLine";

const FeatureSidebar = () => {
    const features = [
        {
            title: 'Длительность',
            value: '2 недели',
            icon: faClock
        },
        {
            title: 'Кол-во лекций',
            value: '10',
            icon: faFileText
        },
        {
            title: 'Кол-во самостоятельных работ',
            value: '6',
            icon: faQuestionCircle
        },
        {
            title: 'Формат обучения',
            value: 'Дистанционно',
            icon: faListAlt
        },
        {
            title: 'Кол-во в группе',
            value: '35',
            icon: faUsers
        }
    ]

    return (
        <div className="sidebar_feature">
            <div className="course_price"
                 style={{marginTop: 30, fontSize: 24}}>
                $180
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