import React from 'react';
import Message from '../message/message.component';
import { getMessages, firestore } from '../../firebase/firebase';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { selectChannelToWrite } from '../../redux/channelToWrite/channelToWrite.selectors';
import { connect } from 'react-redux';

import './chat-message.styles.css';

class ChatMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            message: []
        }
    }
    componentDidMount() {
        const collectionRef = firestore.collection('message');
        collectionRef.onSnapshot(async snapShot => {
            const response = await getMessages(snapShot);
            this.setState({ message: response })


        })
    }

    render() {
        const { channelToWrite } = this.props;
        const { message } = this.state;
        const filtered = message.filter(el => el.channel === channelToWrite);



        return (
            <div className="chat__message">
                { channelToWrite ? (filtered.map(el => <Message message={el} />)) : (<div className="empty">Please select a channel</div>)}
            </div>
        )

    }
}
const mapStateToProps = state => ({
    channelToWrite: selectChannelToWrite(state)
})



export default connect(mapStateToProps)(withRouter(ChatMessage));