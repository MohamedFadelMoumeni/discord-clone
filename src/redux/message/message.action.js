import CONSTANT_TYPES from '../redux.types';
const setMessage = message => ({
    type: CONSTANT_TYPES.SET_MESSAGE_VALUE,
    payload: message
})

export default setMessage;