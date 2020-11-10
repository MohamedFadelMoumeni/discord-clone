import React from 'react';
import { deleteChannels } from '../../firebase/firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import setChannelToWrite from '../../redux/channelToWrite/channelToWrite.action';
import { connect } from 'react-redux';
import './channel.styles.css';

const Channel = ({ channel, setChannelToWrite }) => (
    <div className="sidebarChannel">
        <h4 onClick={() => setChannelToWrite(channel.channel)}><div className="sidebar__div"><span className="sidebarChannel__hash">#</span> {channel.channel}</div> <span className="sidebar__delete"><DeleteIcon className="delete_icon" onClick={() => deleteChannels(channel)} /></span></h4>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setChannelToWrite: channel => dispatch(setChannelToWrite(channel))
})
export default connect(null, mapDispatchToProps)(Channel);