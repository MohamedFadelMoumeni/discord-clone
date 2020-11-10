import { createSelector } from 'reselect';


const selectChannelsElement = state => state.channelsElement;

export const selectChannels = createSelector(
    [selectChannelsElement],
    (channelsElement) => channelsElement.channels
)