import React from 'react';
import SmallCourse from "../courses/SmallCourse";
import SmallEvent from "../events/SmallEvent";

const EventsSidebar = (props) => {
    const data = props.data;

    return (
        <div className="sidebar_latest">
            {
                data?.edges.map(({node}, index, array) =>
                    <SmallEvent key={node.id} data={node}/>
                )
            }
        </div>
    );
};

export default EventsSidebar;