import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logout, checkAuthTimeout, authUser, authCheckState } from './auth';
import { initIngredients } from './milkTeabuilder';
import { getProfile, updateProfileUser } from './profile';
import { purchaseMilkTea, fetchOrders } from './order';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIAL_LOGOUT, logout),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeout),
    takeEvery(actionTypes.AUTH_USER, authUser),
    takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckState),
  ]);
}

export function* watchMilkTea() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_MILKTEA,purchaseMilkTea);
  yield takeEvery(actionTypes.FETCH_ORDER, fetchOrders);
}

export function* watchProfile() {
  yield takeEvery(actionTypes.PROFILE_GET_DATA, getProfile);
  yield takeEvery(actionTypes.PROFILE_UPDATE_DATA,updateProfileUser);
}
