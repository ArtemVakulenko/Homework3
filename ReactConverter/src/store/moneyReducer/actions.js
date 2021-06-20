import * as AT from './actionTypes';

export const sendMoneyRequest = (payload) => ({ 
    type: AT.SEND_MONEY_REQUEST, 
    payload, 
});

export const setMoneyValue = (payload) => ({ 
    type: AT.SET_MONEY_VALUE, 
    payload, 
});
