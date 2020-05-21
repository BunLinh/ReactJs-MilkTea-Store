import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (payload) => {
    return {
        type: actionTypes.AUTH_SUCCESSS,
        payload
    };
};
export const auth = (payload) => {
    return {
        type: actionTypes.AUTH_USER,
        payload
    };
};
export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILDED,
        error
    };
};
export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime
    };
};
export const logout = () => {
    return {
        type: actionTypes.AUTH_INITIAL_LOGOUT
    }
}
export const logoutSucess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const authSignup = () => {
    return {
        type: actionTypes.AUTH_SIGNUP
    }
}
export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_INITIAL_STATE
    }
}
export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}