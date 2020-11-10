import React from 'react';
import { connect } from 'react-redux';
import setChannel from '../../redux/channelToAdd/channelToAdd.action';
import { addChannelToCollection } from '../../firebase/firebase';
import { selectChannelToAdd } from '../../redux/channelToAdd/channelToAdd.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './form.styles.css';

const Form = ({ setChannel, currentUser, channel }) => (
    <form
        className="form"
        onSubmit={(e) => {
            e.preventDefault()
            addChannelToCollection(currentUser, channel)
        }}>
        <input type="text" placeholder="Add a channel" onChange={(e) => setChannel(e.target.value)} />
        <button type="submit" className="submit">submit</button>
    </form>
)



const mapDispatchToProps = dispatch => ({
    setChannel: (channel) => dispatch(setChannel(channel))
})
const mapStateToProps = state => ({
    channel: selectChannelToAdd(state),
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);