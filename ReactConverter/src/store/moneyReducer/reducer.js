import * as AT from './actionTypes';

export const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
