import CONSTANT_TYPES from '../redux.types';
const INITIALE_STATE = {
    currentUser: null
}
const userReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_USER_VALUE:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;