import configAxios from '../utils/axios-order';

const axios = configAxios();

export const purchaseBugerService = (params) =>{
    const { token, ...restParams } = params;
    return axios.post(`/order.json?auth=${token}`, restParams);
}

export const fetchOrdersService = (params) =>{
    const { token, userId } =params;
    return axios.get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
}