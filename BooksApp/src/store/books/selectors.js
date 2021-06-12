import { createSelector } from 'reselect';

const getBooksReducerStore = (store) => store.books;

export const getBooksReducerStoreList = createSelector(
    getBooksReducerStore,
    (booksStore) => booksStore.books,
);
