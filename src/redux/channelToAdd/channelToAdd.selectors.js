import { createSelector } from 'reselect';

const selectChannel = state => state.channelToAdd;

export const selectChannelToAdd = createSelector(
    [selectChannel],
    (channelToAdd) => channelToAdd.channel
)
