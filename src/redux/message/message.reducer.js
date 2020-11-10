import CONSTANT_TYPES from '../redux.types';
const INITIAL_STATE = {
    message: ''
}
const messsageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_MESSAGE_VALUE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

export default messsageReducer;