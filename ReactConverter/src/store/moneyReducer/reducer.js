import * as AT from './actionTypes';

export const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case AT.SET_MONEY_VALUE:
      return {
        ...state,
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
