import * as AT from './actionTypes';

const initialState = {
    postBook: {},
    putBook: {},
    post: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.CHANGE_FIELD_POST:
            return {
                ...state,
                postBook: {
                    ...state.postBook,
                    ...action.payload,
                },
            };
        case AT.CHANGE_FIELD_PUT:
            return {
                ...state,
                putBook: {
                    ...state.putBook,
                    ...action.payload,
                },
            };
        case AT.SET_FIELD_PUT:
            return {
                ...state,
                putBook: {
                    ...state.putBook,
                    ...action.payload,
                },
                post: false,
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
