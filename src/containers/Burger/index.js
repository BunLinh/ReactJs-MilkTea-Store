import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';

import configAxios from '../../utils/axios-order';
import Burger from '../../components/Burger';
import BurgerControls from '../../components/Burger/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary';

import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/WithErrorHandler';
import Background from '../../assets/images/backGround.svg';
import RedTea from '../../assets/images/ab-circle.png';
import Pearls from '../../assets/images/pearl.png';

const axios = configAxios();

export const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);
  const dispatch = useDispatch();

  //get state in reducer/index
  const ings = useSelector((state) => {
    // console.log(state.burgerBuidler.ingredients);
    
    return state.burgerBuidler.ingredients;
  });
  //get state in reducer/index
  const totalPrice = useSelector((state) => {
    return state.burgerBuidler.totalPrice;
    // return state.burgerBuilder.totalPrice;
  });
  const isAuthenticated = useSelector((state) => {
    return !!state.auth.token;
  });

  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

  const { history } = props;

  //update price when u chose buger and ingredients
  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      history.push('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  // 
  const purchaseContinueHandler = () => {
    history.push('/checkout');
  };
  // ??
  const disableInfo = {
    ...ings,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }

  let orderSummary = null;
  let burger;

  if (ings) {
    burger = (
      <React.Fragment>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            backgroundImage: `url(${Background})`,
            marginTop:'100px'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <img style={{
              width: '30%',
              height: '100%'
            }} src={RedTea} />
            <Burger ingredients={ings} />
            <img style={{
              width: '30%',
              height: '100%'
            }} src={RedTea} />
          </div> 
          <div style={{ marginTop: 'auto' }}>
            <BurgerControls
              ingredientAdded={onIngredientAdded}
              ingredientRemoved={onIngredientRemoved}
              disabled={disableInfo}
              purchasable={updatePurchaseState(ings)}
              isAuth={isAuthenticated}
              price={totalPrice.toFixed(2)}
              orderd={purchaseHandler}
            />
          </div>
        </div>
      </React.Fragment>
    );
    orderSummary = <OrderSummary price={totalPrice.toFixed(2)} ingredients={ings} />;
  }
  return (
    <React.Fragment>
      <Modal
        closable={false}
        onOk={() => purchaseContinueHandler()}
        onCancel={() => purchaseCancelHandler()}
        centered
        okText='Continue'
        cancelText='Cancel'
        visible={purchasing}
      >
        {orderSummary}
      </Modal>
      <div>{burger}</div>
    </React.Fragment>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
