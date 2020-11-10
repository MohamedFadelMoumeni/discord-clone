
const INITIAL_STATE = {
    channelToWrite: ''
}

const channelToWritereducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CHANNEL_TOWRITE':
            return {
                ...state,
                channelToWrite: action.payload
            }
        default:
            return state
    }
}

export default channelToWritereducer;