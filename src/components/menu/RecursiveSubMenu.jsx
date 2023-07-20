import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faCheck} from "@fortawesome/free-solid-svg-icons";
import SidebarMenu from 'react-bootstrap-sidebar-menu';

const RecursiveSubMenu = (props) => {
    const {data, subMenuCount} = props.data;

    return (
        <>
            {
                data.map((item, index) =>
                    <>
                        {
                            item.childs.length === 0 ?
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Icon>
                                        {item.icon}
                                    </SidebarMenu.Nav.Icon>
                                    <SidebarMenu.Nav.Title>
                                        {item.title}
                                    </SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav> :
                                <SidebarMenu.Sub>
                                    <SidebarMenu.Sub.Toggle as="div"
                                                            bsPrefix="sidebar-menu-nav">
                                        <SidebarMenu.Nav.Icon>
                                            <FontAwesomeIcon
                                                icon={faAngleDown}/>
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>
                                            title
                                        </SidebarMenu.Nav.Title>
                                        <span className="suffix-wrapper">
                                            {
                                                item.isComplete &&
                                                <FontAwesomeIcon
                                                    icon={faCheck}/>
                                            }
                                        </span>
                                    </SidebarMenu.Sub.Toggle>
                                    <SidebarMenu.Sub.Collapse className={subMenuCount % 2 === 0 ? "odd" : ""}>
                                        <RecursiveSubMenu data={{
                                            data: item.childs,
                                            subMenuCount: subMenuCount + 1,
                                        }}/>
                                    </SidebarMenu.Sub.Collapse>
                                </SidebarMenu.Sub>
                        }
                    </>
                )
            }
        </>
    );
};

export default RecursiveSubMenu;