import { call, put } from 'redux-saga/effects';

import { iniIngredientService } from '../../services/burgerBuilder';
import * as actions from '../actions';

export function* initIngredients() {
  try {
    const response = yield call(iniIngredientService);
    console.log(response + '-----------');
    
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
