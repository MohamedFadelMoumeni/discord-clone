import { createSelector } from 'reselect';

const selectLoading = state => state.show;

export const selectisLoading = createSelector(
    [selectLoading],
    (show) => show.isLoading
)