import React from 'react';
import {NavLink} from "react-router-dom";

const TagsSidebar = () => {
    const tags = [
        'creative', 'unique', 'photography', 'ideas', 'wordpress', 'startup'
    ]

    return (
        <div className="sidebar_tags">
            <ul className="tags_list" style={{paddingLeft: 0}}>
                {
                    tags.map((value, index, array) =>
                        <li key={index}>
                            <NavLink to="/">
                                {value}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default TagsSidebar;