import { takeEvery, call, put } from 'redux-saga/effects';
import * as AT from './actionTypes';
import * as ACTIONS from './actions';
import { convertFromPrivatToNormal } from '../../helpers/converter';

const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export function* getMoney() {
    const response = yield call(fetch, URL);
    const data = yield call([response, 'json']);
    const normalData = yield call(convertFromPrivatToNormal, data);
    yield put(ACTIONS.setMoneyValue(normalData));
}

export default function* watcher() {
    yield takeEvery(AT.SEND_MONEY_REQUEST, getMoney);
}
