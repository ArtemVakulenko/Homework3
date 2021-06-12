import * as AT from './actionTypes';

const initialState = {
    books: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_BOOKS_TO_STORE: {
            return {
                ...state,
                books: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
