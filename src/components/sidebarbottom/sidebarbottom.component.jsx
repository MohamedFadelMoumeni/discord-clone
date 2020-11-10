import React from 'react';
import { Avatar } from '@material-ui/core'
import { connect } from 'react-redux';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './sidebarbottom.styles.css';

const SideBarBottom = ({ currentUser: { displayName, photoURL, email } }) => (
    <div className="sidebar__profile">
        <Avatar src={photoURL} />
        <div className="sidebar__profileInfo">
            <h3>@{displayName.toLowerCase()}</h3>
            <p>{email}</p>
        </div>
        <div className="sidebar__profileIcons">
            <MicIcon className="icon3" />
            <HeadsetIcon className="icon3" />
            <SettingsIcon className="icon3" />

        </div>

    </div>
)
const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(SideBarBottom);