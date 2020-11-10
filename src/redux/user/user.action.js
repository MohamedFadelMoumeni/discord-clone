import CONSTANT_TYPES from '../redux.types';
const setCurrentUser = (user) => ({
    type: CONSTANT_TYPES.SET_USER_VALUE,
    payload: user
})

export default setCurrentUser;