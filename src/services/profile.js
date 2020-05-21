import configAxios from '../utils/axios-order';

const axios = configAxios();

export const getProfileUser = (params) => {
  const { token, userId } = params;
  console.log(token + '------------service');

    return axios.get(`/profiles/${userId}.json?auth=${token}`);
  };
  
  export const updateProfile = (params) => {
    const { token, userId, ...restparams } = params;
    return axios.put(`/profiles/${userId}.json?auth=${token}`, { ...restparams });
  };