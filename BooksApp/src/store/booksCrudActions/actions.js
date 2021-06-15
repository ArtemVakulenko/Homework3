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
