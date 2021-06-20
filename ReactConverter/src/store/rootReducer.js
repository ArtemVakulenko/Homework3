import { combineReducers } from 'redux';
import moneyReducer from './moneyReducer/reducer';

const rootReducer = combineReducers({
    money: moneyReducer,
});

export default rootReducer;
