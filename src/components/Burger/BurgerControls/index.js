import React from 'react';
import { Button } from 'antd';

import BuildControl from './BurgerControl';
import classes from './styles.module.css';
import ChanChau from '../../../assets/images/chanchau.jpg';
import Aloe from '../../../assets/images/aloe.jpg';
import Pudding from '../../../assets/images/pudding.jpg';
import AiYu from '../../../assets/images/aiyu.jpg';

const controls = [
  { label: 'Pearls', type: 'pearls', icon: ChanChau },
  { label: 'Aloe', type: 'aloe', icon: Aloe },
  { label: 'Ai Yu', type: 'aiyu', icon: Pudding },
  { label: 'Pudding', type: 'pudding', icon: AiYu },
];

const BuildControls = (props) => (
  <div className={classes.buildControls}>
    <p >
      Current Price: <strong>{props.price}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        icon={ctrl.icon}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
    <Button
      className={classes.orderButton}
      disabled={!props.purchasable}
      onClick={props.orderd}
      type='primary'
      ghost
    >
      {
        props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}
    </Button>
  </div>

);

export default BuildControls;
