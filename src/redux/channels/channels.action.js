import CONSTANT_TYPES from '../redux.types';

const setChannels = channels => ({
    type: CONSTANT_TYPES.SET_CHANNELS_VALUE,
    payload: channels
})

export default setChannels;