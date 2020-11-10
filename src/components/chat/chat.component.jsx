import React from 'react';
import { connect } from 'react-redux';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete';


import ChatMessage from '../chat-message/chat-message.component';
import Header from '../header/header.component';
import { createMessage } from '../../firebase/firebase';
import Message from '../message/message.component';
import FormInput from '../input/input.component';
import setMessage from '../../redux/message/message.action';
import { selectMessage } from '../../redux/message/message.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectChannelToWrite } from '../../redux/channelToWrite/channelToWrite.selectors';

import './chat.styles.css';

const Chat = ({ message, setMessage, channelToWrite, currentUser }) => {

    return (

        <div className="chat">
            <Header />


            <ChatMessage />
            <div className="chat__input">
                <AddCircleIcon fontSize="large" style={{ color: 'white', margin: '0 10px', cursor: 'pointer' }} />
                <form onSubmit={(e) => { e.preventDefault(); createMessage(message, currentUser, channelToWrite); setMessage('') }}>
                    {
                        channelToWrite ? (<FormInput type="text" placeholder={`message #Youtube`} onChange={(e) => setMessage(e.target.value)} value={message} />)
                            : (<FormInput type="text" placeholder={`Select a channel`} disabled />)
                    }
                    <button
                        className="chat__inputButton"
                        type="submit"
                    >
                        Send Message
                </button>
                </form>
                <div className="chat__inputIcons">
                    <AttachFileIcon className="icon" fontSize="large" style={{ color: 'gray', margin: '0 10px', cursor: 'pointer' }} />
                    <DeleteIcon fontSize="large" style={{ color: 'gray', margin: '0 10px', cursor: 'pointer' }} />

                </div>

            </div>

        </div>


    )
}
const mapDispatchToProps = dispatch => ({
    setMessage: (message) => dispatch(setMessage(message))
})
const mapStateToProps = state => ({
    message: selectMessage(state),
    channelToWrite: selectChannelToWrite(state),
    currentUser: selectCurrentUser(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(Chat);