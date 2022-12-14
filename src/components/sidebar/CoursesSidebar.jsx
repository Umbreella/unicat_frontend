import React from 'react';
import SmallCourse from "../courses/SmallCourse";

const CoursesSidebar = (props) => {
    const data = props.data;

    return (
        <div className="sidebar_latest">
            {
                data?.edges.map(({node}, index, array) =>
                    <SmallCourse key={node.id} item={node}/>
                )
            }
        </div>
    );
};

export default CoursesSidebar;