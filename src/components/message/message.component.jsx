import React from 'react';
import { Avatar } from '@material-ui/core'
import './message.styles.css';

const Message = ({ message }) => {

    return (
        <div className="message">
            <Avatar src={message.currentUser.photoURL} />
            <div className="message__details">
                <h4>
                    {message.currentUser.displayName}
                    <span className="message__time"></span>
                </h4>
                <p>{message.message}</p>

            </div>
        </div>
    )
}

export default Message;