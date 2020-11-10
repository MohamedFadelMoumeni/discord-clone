import React from 'react';
import SideBarTop from '../sidebartop/sidebartop.component';
import MenuChannel from '../menu-channel/menu-channel.component';
import './sidebar.style.css';

const SideBar = () => (
    <div className="sidebar">
        <SideBarTop />
        <MenuChannel />
    </div>
)
export default SideBar;