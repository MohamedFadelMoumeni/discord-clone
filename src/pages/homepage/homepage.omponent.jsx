import React from 'react';
import SideBar from '../../components/sidebar/sidebar.component';
import Chat from '../../components/chat/chat.component';
import './homepage.styles.css';

const HomePage = () => (
    <div className="homepage">
        <SideBar />
        <Chat />

    </div>
)
export default HomePage;