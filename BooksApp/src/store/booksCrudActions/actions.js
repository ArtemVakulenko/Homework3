import * as AT from './actionTypes';

export const changeFieldPost = (payload) => ({
    type: AT.CHANGE_FIELD_POST,
    payload,
});

export const changeFieldPut = (payload) => ({
    type: AT.CHANGE_FIELD_PUT,
    payload,
});

export const setFieldPut = (payload) => ({
    type: AT.SET_FIELD_PUT,
    payload,
});

export const clearFields = (payload) => ({
    type: AT.CLEAR_FIELDS,
    payload,
});

export const booksPostRequest = () => ({
    type: AT.BOOKS_POST_REQUEST,
});

export const booksDeleteRequest = (payload) => ({
    type: AT.BOOKS_DELETE_REQUEST,
    payload,
});
export const booksPutRequest = () => ({
    type: AT.BOOKS_PUT_REQUEST,
});
