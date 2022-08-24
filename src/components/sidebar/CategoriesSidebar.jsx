import React from 'react';
import {NavLink} from "react-router-dom";

const CategoriesSidebar = () => {
    return (
        <div className="sidebar_categories">
            <ul>
                <li>
                    <NavLink to="#">
                        Art & Design
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">
                        Business
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">
                        IT & Software
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">
                        Languages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">
                        Programming
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesSidebar;