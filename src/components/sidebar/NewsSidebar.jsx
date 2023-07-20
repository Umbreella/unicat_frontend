import React from 'react';
import SmallNews from "../news/SmallNews";

const NewsSidebar = (props) => {
    const data = props.data;

    return (
        <div className="sidebar_latest">
            {
                data?.edges.map(({node}, index, array) =>
                    <SmallNews key={node.id} data={node}/>
                )
            }
        </div>
    );
};

export default NewsSidebar;