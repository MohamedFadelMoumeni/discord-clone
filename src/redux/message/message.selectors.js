import { createSelector } from 'reselect';

const selectMessageElement = state => state.messageElement;

export const selectMessage = createSelector(
    [selectMessageElement],
    (messageElement) => messageElement.message
)