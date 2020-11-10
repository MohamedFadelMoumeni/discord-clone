import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';


import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import FormInput from '../input/input.component';
import setChannelToWrite from '../../redux/channelToWrite/channelToWrite.action';
import { getChannelsByTextSearch } from '../../firebase/firebase';
import './header.styles.css';


class Header extends React.Component {

    render() {
        const { setChannelToFind, channelToWrite } = this.props;


        return (
            <div className="header">
                <div className="header__left">
                    <h3><span className="header__hash">#</span>{channelToWrite} </h3>
                </div>
                <div className="header__right">
                    <NotificationsIcon className="chat__icon" />
                    <EditLocationIcon className="chat__icon" />
                    <PeopleAltIcon className="chat__icon" />
                    <div className="chat__search">
                        <FormInput type="text" placeholder="search" />
                        <SearchIcon />

                    </div>
                    <ExitToAppIcon className="signout" onClick={() => auth.signOut()} />

                </div>

            </div>
        )
    }

}



const mapStateToProps = state => ({
    channelToWrite: state.channelToWriteElement.channelToWrite
})


export default connect(mapStateToProps)(Header);