import CONSTANT_TYPES from '../redux.types';
const INITIAL_STATE = {
    channel: ''
}
const channelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_CHNNEL_VALUE:
            return {
                ...state,
                channel: action.payload
            }
        default:
            return state
    }
}

export default channelReducer;