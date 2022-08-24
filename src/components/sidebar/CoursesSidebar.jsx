import React from 'react';
import SmallCourse from "../courses/SmallCourse";

const CoursesSidebar = () => {
    return (
        <div className="sidebar_latest">
            <SmallCourse />
            <SmallCourse />
            <SmallCourse />
        </div>
    );
};

export default CoursesSidebar;