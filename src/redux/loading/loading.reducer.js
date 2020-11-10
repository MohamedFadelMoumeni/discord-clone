import CONSTANT_TYPES from '../redux.types';
const INITIALE_STATE = {
    isLoading: true
}
const loadingReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case CONSTANT_TYPES.SET_LOADING_VALUE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default loadingReducer;