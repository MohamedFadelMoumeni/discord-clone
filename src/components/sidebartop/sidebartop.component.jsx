import React from 'react';
import { connect } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './sidebartop.styles.css';

const SideBarTop = ({ currentUser }) => (
    <div className="sidebar__top">
        <h3>{currentUser.displayName}</h3>
        <ExpandMoreIcon className="icon" />
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(SideBarTop);