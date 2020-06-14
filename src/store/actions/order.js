import * as actionTypes from './actionTypes';

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const purchaseMilkTea = (payload) => {
    return {
        type: actionTypes.PURCHASE_MILKTEA,
        payload
    };
};
export const purchaseMilkTeaSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_MILKTEA_SUCCESS,
        orderId: id,
        orderData,
    }
}
export const purchaseMilkTeaFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_MILKTEA_FAILED,
        error,
    }
}
export const fetchOrder = (payload) => {
    return {
        type: actionTypes.FETCH_ORDER,
        payload,
    }
}
export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders,
    }
}
export const fetchOrderFail = (errors) => {
    return {
        type: actionTypes.FETCH_ORDER_FAILED,
        errors
    }
}
export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START,
    }
}