import CONSTANT_TYPES from '../redux.types';


const INITIALE_STATE = {
    channels: []
}
const channelsReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_CHANNELS_VALUE:
            return {
                ...state,
                channels: action.payload

            }
        default:
            return state
    }
}

export default channelsReducer;