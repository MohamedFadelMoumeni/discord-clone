import CONSTANT_TYPES from '../redux.types';
const setChannel = channel => ({
    type: CONSTANT_TYPES.SET_CHNNEL_VALUE,
    payload: channel
})

export default setChannel;