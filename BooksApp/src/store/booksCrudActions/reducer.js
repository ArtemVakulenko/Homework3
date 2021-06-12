import * as AT from './actionTypes';

const initialState = {
    postBook: {},
    putBook: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.CHANGE_FIELD:
            return {
                ...state,
                postBook: {
                    ...state.postBook,
                    ...action.payload,
                },
            };
        case AT.CLEAR_FIELDS:
            return {
                ...state,
                postBook: {},
            };
        default:
            return state;
    }
};

export default reducer;
