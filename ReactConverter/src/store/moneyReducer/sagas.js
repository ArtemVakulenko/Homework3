import { takeEvery, call, put } from 'redux-saga/effects';
import * as AT from './actionTypes';
import * as ACTIONS from './actions';
import { convertFromPrivatToNormal } from '../../helpers/converter';
// import { fetchFunc } from '../../helpers/fetch';

const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export function* getMoney() {
    let data = yield call(fetch, URL);
    data = yield data.json();
    const normalData = yield call(convertFromPrivatToNormal, data);
    console.log(typeof normalData.base_ccy);
    yield put(ACTIONS.setMoneyValue(data));
}

export default function* watcher() {
    yield takeEvery(AT.SEND_MONEY_REQUEST, getMoney);
}
