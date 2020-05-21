import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import { getProfileUser, updateProfile } from '../../services/profile';
import { getCookie } from '../../utils/cookies';
import { COOKIE_EMAIL, COOKIE_TOKEN, COOKIE_USER_ID, } from '../../constants'

export function* getProfile() {
  yield put(actions.getProfileStart());
    try {
        const email = getCookie(COOKIE_EMAIL);
        const token = yield getCookie(COOKIE_TOKEN);
        const userId = yield getCookie(COOKIE_USER_ID);
        const response = yield call(getProfileUser, {
          token,
          userId,
        });
        
        let dataFromResponse = {};
        if (response && response.data) {
          dataFromResponse = response.data;
        }
        if (!dataFromResponse.email) {
          dataFromResponse.email = email;
        }
    
        yield put(actions.getProfileSuccess(dataFromResponse));
      } catch (error) {
        yield put(actions.getProfileFailed(error.response.error));
      }
    }
export function* updateProfileUser({ payload }) {
    try {
        const token = yield getCookie(COOKIE_TOKEN);
        const userId = yield getCookie(COOKIE_USER_ID);
        yield put(actions.getProfileStart());
        yield call(updateProfile, {...payload, token, userId});
        yield put(actions.profile_get_data({token, userId}));
        yield put(actions.setProfileUpdateStatus(false));
    } catch (error) {
        yield put(actions.setProfileUpdateStatus(true));
    }
}