import * as actionTyle from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    // authRedirectPathAdmin:'/admin',
    isSignupSuccess: false,
};

const authStart = (state) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, { payload }) => {
    const { token, userId } = payload;
    return updateObject(state, {
        error: null,
        loading: false,
        token,
        userId
    });
};

const authFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const authLogout = (state) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {
        authRedirectPath: action.path,
    });
};

const setAuthSignupSuccess = (state) => {
    return updateObject(state, {
        isSignupSuccess: true,
        loading: false
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTyle.AUTH_START:
            return authStart(state);
        case actionTyle.AUTH_SUCCESSS:
            return authSuccess(state,action);
        case actionTyle.AUTH_FAILDED:
            return authFailed(state, action);
        case actionTyle.AUTH_LOGOUT:
            return authLogout(state);
        case actionTyle.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        case actionTyle.AUTH_SIGNUP:
            return setAuthSignupSuccess(state);
        default:
            return state;
    }
}
export default reducer;