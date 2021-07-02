import * as AT from './actionTypes';

export const booksGetRequest = () => ({ type: AT.GET_BOOKS });

export const setBooksTostore = (payload) => {
    return {
        type: AT.SET_BOOKS_TO_STORE,
        payload,
    };
};
