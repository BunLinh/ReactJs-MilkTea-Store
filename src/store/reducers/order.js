import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const purchaseInit = (state) => {
    return updateObject(state, { purchased: false });
}
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = state.orders.concat({
        ...action.orderData,
        id: action.orderId,
    });
    return updateObject(state, {
        loading: false,
        orders: newOrder
    })
}
const purchaseBurgerFailed = (state) => {
    return updateObject(state, { loading: false });
}
// data in order

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, { loading: false, orders: action.orders });
}
const fetchOrderFailed = (state) => {
    return updateObject(state, { loading: false })
}
const fetchOrderStart = (state) => {
    return updateObject(state, { loading: true })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state);
        case actionTypes.PURCHASE_BUGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BUGER_FAILED:
            return purchaseBurgerFailed(state);
        case actionTypes.FETCH_ORDER_START:
            return fetchOrderStart(state);
        case actionTypes.FETCH_ORDER_SUCCESS:
            return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDER_FAILED:
            return fetchOrderFailed(state);
        default:
            return state;
    }
}
export default reducer;