import { createSelector } from 'reselect';

const getBooksCrudActionsReducerStore = (state) => state.booksCrudActions;

export const getCreateFormState = createSelector(
    getBooksCrudActionsReducerStore,
    (booksCrudActions) => booksCrudActions.postBook,
);

export const getUpdateFormState = createSelector(
    getBooksCrudActionsReducerStore,
    (booksCrudActions) => booksCrudActions.putBook,
);

export const getStatusPostOrPut = createSelector(
    getBooksCrudActionsReducerStore,
    (booksCrudActions) => booksCrudActions.post,
); 

export const getCreateFieldState = createSelector(
    getCreateFormState,
    (_state, { id }) => id,
    (postBook, id) => postBook[id] || '',
);

export const getUpdateFieldState = createSelector(
    getUpdateFormState,
    (_state, { id }) => id,
    (putBook, id) => putBook[id] || '',
); 
