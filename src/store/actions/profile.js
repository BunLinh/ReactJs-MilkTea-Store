import * as actionsTyle from './actionTypes';

export const profile_get_data = () => {
    return {
        type: actionsTyle.PROFILE_GET_DATA
    }
};

export const getProfileStart = () => {
    return {
        type: actionsTyle.PROFILE_GET_DATA_START
    }
};
export const getProfileSuccess = (payload) => {
    return {
        type: actionsTyle.PROFILE_GET_DATA_SUCCESS,
        payload
    }
}
export const getProfileFailed = (error) => {
    return {
        type: actionsTyle.PROFILE_GET_DATA_FAILED,
        error
    }
}
export const updateProfile = (payload) => {
    return {
        type: actionsTyle.PROFILE_UPDATE_DATA,
        payload
    }
};
export const setProfileUpdateStatus = (payload) => {
    return {
        type: actionsTyle.PROFILE_UPDATE_DATA_STATUS,
        payload
    }
}