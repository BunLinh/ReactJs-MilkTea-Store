import { call, put } from 'redux-saga/effects';

import { purchaseMilkTeaService, fetchOrdersService } from '../../services/order';
import { getCookie } from '../../utils/cookies';
import { COOKIE_EMAIL, COOKIE_TOKEN } from '../../constants';
import * as actions from '../actions';

export function* purchaseMilkTea({ payload }) {
    const token = yield getCookie(COOKIE_TOKEN);
    const userId = yield getCookie(COOKIE_EMAIL);
    const params = {
        ...payload,
        token,
        userId,
    };
    try {
        const response = yield call(purchaseMilkTeaService, params);
        yield put(actions.initIngredients());
        yield put(fetchOrders(response));
    } catch (error) {
        yield put(actions.purchaseMilkTeaFailed(error))
    }
}
//call all order
export function* fetchOrders({payload}){
    yield put(actions.fetchOrderStart());
    try {
        const response = yield call(fetchOrdersService, payload);
        const dataFetch = [];
        for (let key in response.data){
            dataFetch.push({
                ...response.data[key],
                id: key,
            })
        }
        yield put(actions.fetchOrderSuccess(dataFetch));
    } catch (error) {
        yield put(actions.fetchOrderFail(error));
    }
}