import React from 'react';

const SidebarSection = (props) => {
    return (
        <div className="sidebar_section">
            <div className="sidebar_section_title">
                {props.section.title}
            </div>
            {props.section.body}
        </div>
    );
};

export default SidebarSection;