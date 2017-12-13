import React from 'react';

import {
    NavSidebar,
    NavSidebarNav,
    NavSidebarItem
} from '../bootstrap';

const Sidebar = (props) => {
    const { activate, items } = props;
    return (
        <NavSidebar>
            <NavSidebarNav>
                {
                    items.map(item => (
                        <NavSidebarItem
                            key={item.name}
                            onClick={() => activate(item.name)}
                        >{item.title}</NavSidebarItem>
                    ))
                }
            </NavSidebarNav>
        </NavSidebar>
    )
}

export default Sidebar;
