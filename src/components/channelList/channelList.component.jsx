import React from 'react';
import { connect } from 'react-redux';
import { selectChannels } from '../../redux/channels/channels.selector';
import Channel from '../channel/channel.component';
import './channelList.styles.css';

const ChannelList = ({ channels }) => (
    <div className="sidebar__channelsList">
        {
            channels.map(channel => <Channel channel={channel} />)

        }

    </div>
)

const mapStateToProps = state => ({
    channels: selectChannels(state)

})

export default connect(mapStateToProps)(ChannelList);