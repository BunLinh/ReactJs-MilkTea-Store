import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { connect } from 'react-redux';

import Order from '../../components/Order';
import configAxios from '../../utils/axios-order';
import withErrorHandler from '../../hoc/WithErrorHandler';
import * as actions from '../../store/actions';

const axios = configAxios();

const Orders = (props) => {
    // const dispatch = useDispatch();
    // const orders = useSelector((state) => {
    //     return state.order.orders;
    // })
    // const loading = useSelector((state) => {
    //     return state.order.loading;
    // })
    // const token = useSelector((state) => {
    //     return state.auth.token;
    // })
    // const userId = useSelector((state) => {
    //     return state.auth.userId
    // })


    // useEffect(() => {
    //     onFetchOrder({ token, userId });
    // }, [onFetchOrder, userId, token])
    // const onFetchOrder = (userId, token) => dispatch(actions.fetchOrder(userId, token))

    const { token, userId, onFetchOrders } = props;
    useEffect(() => {
        onFetchOrders({ token, userId });
        console.log(token);
        
    }, [token, userId, onFetchOrders]);

    return (
        <div style={{ margin: '0 auto', width: '80%' }}>
            <Skeleton loading={props.loading}>
                {/* order in ./reducer/order */}
                {props.orders.map((order) => (
                    <Order
                        id={order.id}
                        key={order.id}
                        ingredients={order.ingredients}
                        price={ order.price}
                        createAt={order.createAt}
                        />
                ))}
            </Skeleton>
        </div>
    )
}
const mapStateToProps = (state) => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchOrders: (payload) => dispatch(actions.fetchOrder(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));