import * as AT from './actionTypes';

export const changeField = (payload) => ({
    type: AT.CHANGE_FIELD,
    payload,
});

export const clearFields = (payload) => ({
    type: AT.CLEAR_FIELDS,
    payload,
});
