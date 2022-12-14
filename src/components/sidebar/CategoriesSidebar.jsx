import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const CategoriesSidebar = (props) => {
    const data = props.data;

    return (
        <div className="sidebar_categories">
            <ul>
                {
                    data?.edges.map(({node}, index, array) =>
                        <li key={node.id}>
                            <NavLink to="#">
                                <FontAwesomeIcon icon={faChevronRight} />
                                {node.title}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default CategoriesSidebar;