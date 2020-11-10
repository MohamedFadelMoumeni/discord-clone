import { createSelector } from 'reselect';

const selectChannel = state => state.channelToWriteElement;

export const selectChannelToWrite = createSelector(
    [selectChannel],
    (channelToWriteElement) => channelToWriteElement.channelToWrite
)