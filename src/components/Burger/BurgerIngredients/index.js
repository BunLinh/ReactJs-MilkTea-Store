import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles.module.css';

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.breadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={classes.breadTop}>
          {/* <div className={classes.seeds1}></div>
          <div className={classes.seeds2}></div> */}
        </div>
      );
      break;
    case 'pudding':
      debugger
      ingredient = <div className={classes.meat}></div>;
      break;
    case 'aloe':
      ingredient = <div className={classes.cheese}></div>;
      break;
    case 'aiyu':
      ingredient = <div className={classes.bacon}></div>;
      break;
    case 'pearls':
      ingredient = <div className={classes.pearls}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
