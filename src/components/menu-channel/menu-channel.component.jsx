import React from 'react';
import { connect } from 'react-redux';
import ChannelList from '../channelList/channelList.component';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import SideBarBottom from '../sidebarbottom/sidebarbottom.component';
import Form from '../form/form.component';
import { getChannels, firestore } from '../../firebase/firebase';
import setChannels from '../../redux/channels/channels.action';
import { selectChannels } from '../../redux/channels/channels.selector';
import './menu-channel.styles.css';

class MenuChannel extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        const { setChannels } = this.props;
        const collectionRef = firestore.collection('channels');
        collectionRef.onSnapshot(async snapShot => {
            const response = await getChannels(snapShot);
            setChannels(response);

        })

    }
    render() {
        const { channels } = this.props;
        const { show } = this.state;
        return (
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="icon" onClick={() => this.setState({ show: !show })} />
                    {
                        show ? <Form /> : null
                    }
                </div>
                {
                    channels.length ? <ChannelList /> : (<h4 className="notfound">Nothing</h4>)
                }
                <div className="sidebar__voice">
                    <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className="sidebar__voiceIcons">
                        <InfoIcon className="icon1" />
                        <CallIcon className="icon2" />
                    </div>
                </div>
                <SideBarBottom />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    channels: selectChannels(state)
});
const mapDispatchToProps = dispatch => ({
    setChannels: channels => dispatch(setChannels(channels))
})


export default connect(mapStateToProps, mapDispatchToProps)(MenuChannel);