import { createSelector } from 'reselect';

const getBooksCrudActionsReducerStore = (state) => state.booksCrudActions;

export const getCreateFormState = createSelector(
    getBooksCrudActionsReducerStore,
    (books) => books.postBook,
); 

export const getCreateFieldState = createSelector(
    getCreateFormState,
    (_state, { id }) => id,
    (postBook, id) => postBook[id],
); 
