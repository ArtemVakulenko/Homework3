import { takeEvery, call, put } from 'redux-saga/effects';
import * as AT from './actionTypes';
import * as ACTIONS from './actions';
import { convertFromPrivatToNormal } from '../../helpers/converter';

const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export function* getMoney() {
    let data = yield call(fetch, URL);
    data = yield data.json();
    yield call(convertFromPrivatToNormal, data);
    console.log(data);
    yield put(ACTIONS.setMoneyValue(data));
}

export default function* watcher() {
    yield takeEvery(AT.SEND_MONEY_REQUEST, getMoney);
}
