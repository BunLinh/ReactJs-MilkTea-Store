import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Row, Modal, Col, Button, Alert } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import * as actionTypes from '../../store/actions';
import classes from './styles.module.css';
import { INGREDIENT_PRICE } from '../../store/reducers/milkTea';

const Checkout = (props) => {
  
    const { onInitPurchase, address, ings, totalPrice } = props;
    useEffect(() => {
        console.log(address);
        
        return () => onInitPurchase();
    }, [onInitPurchase]);
    // console.log(INGREDIENT_PRICE);
    
    if (!props.ings) {
        props.history.push('/');
    }

    const ingsIngredientShow = { ...ings, bread: 1 };

    const showIngredients = Object.keys(ingsIngredientShow).map((igKey) => {
        return (
            <Row key={igKey}>
                {/* chieu rong chiem 20 phan so voi cac cot duoi ne */}
                <Col span={20}>
                    <div className={classes.capital}>{igKey}</div>
                </Col>
                <Col span={1}>
                    <div>{ingsIngredientShow[igKey]}</div>
                </Col>
                <Col span={1}>
                    <div>x</div>
                </Col>
                <Col span={1}>
                    <div className={classes.money}>{INGREDIENT_PRICE[igKey]}</div>
                </Col>
                <Col span={1}>
                    <div className={classes.money}>$</div>
                </Col>
            </Row>
        )
    });

    const onOrderHandler = () => {
        if (!props.address) {
            console.log(address+'___________ checkout');            
            return Modal.warning({
                title: 'Please update profile first',
                onOk: () => {
                    props.history.push('/profile');
                    return;
                }
            })
        }

        props.onOrderBurger({
            ingredients: ings,
            //bread gan ban dau bang 4 o reducer
            price: totalPrice,
            createAt: new Date().toISOString(),
        });

        props.onInitIngredients();
        props.history.push('/');
        return (<Alert message="Success Tips" type="success" showIcon />
        
        )
    };

    const onCancelHandler = () => {
        // props.history.push('/');
         Modal.warning({
            title:'Are you sure cancel your burger?',
            onOk:()=>{
                props.history.push('/');
                return;
            }
        })
    };

    return (
        <div className={classes.checkout_container}>
            <List
                header={
                    <p className={classes.order_title}>
                        <ShoppingCartOutlined />
                        <span style={{ marginLeft: '24px' }}> Your orders</span>
                    </p>
                }
                bordered
            >
                <div style={{ margin: '20px 50px' }}>
                    <p className={classes.txt_thank}>
                        Thanks for your buying. I hope you taste well. See you soon!!
                    </p>
                    {showIngredients}
                    <hr />
                    <Row>
                        <Col span={22}>
                            <div className={classes.capital}>Total</div>
                        </Col>
                        <Col span={1}>
                            <div className={classes.money}>{totalPrice.toFixed(2)}</div>
                        </Col>
                        <Col span={1}>
                            <div className={classes.money}>$</div>
                        </Col>
                    </Row>
                    <p className={classes.txt_delivery}>Delivery at {address}</p>
                    <Row justify='end'>
                        <Button onClick={onCancelHandler}>CANCEL</Button>
                        <Button style={{ marginLeft: '16px' }} type='primary' onClick={onOrderHandler}>ORDER</Button>
                    </Row>
                </div>
            </List>
        </div>
    )
}
// hoac dung useSelector giong trong ./container/MilkTea
const mapStateToProps = (state) => {
    return {
        ings: state.milkTeaBuidler.ingredients,
        totalPrice: state.milkTeaBuidler.totalPrice,
        address: state.profile.profile.address

    }
}
const mapDispatchToProps = (dispatch) => ({
    onInitPurchase: () => dispatch(actionTypes.purchaseInit()),
    onOrderBurger: (payload) => dispatch(actionTypes.purchaseMilkTea(payload)),
    onInitIngredients: () => dispatch(actionTypes.initIngredients())
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);