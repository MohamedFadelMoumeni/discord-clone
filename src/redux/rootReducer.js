import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import loadingReducer from './loading/loading.reducer';
import channelReducer from './channelToAdd/channelToAdd.reducer';
import channelsReducer from './channels/channels.reducer';
import messsageReducer from './message/message.reducer';
import channelToWritereducer from './channelToWrite/channelToWrite.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    show: loadingReducer,
    channelToAdd: channelReducer,
    channelsElement: channelsReducer,
    messageElement: messsageReducer,
    channelToWriteElement: channelToWritereducer

});

export default rootReducer;