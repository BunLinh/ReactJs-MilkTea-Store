import React from 'react';

import classes from './styles.module.css';
import BurgerIngredient from './BurgerIngredients';

const Burger = (props) => {
  if (!props.ingredients) return null;
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // console.log(props.ingredients + '------');
      
      const number = props.ingredients[igKey];
      const listBurgerIngredient = [];
      for (let el = 1; el <= number; el += 1) {
        listBurgerIngredient.push(<BurgerIngredient key={igKey + el} type={igKey} />);
      }
      return listBurgerIngredient;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p className={classes.txt_toping}>Add Toping for delicious!</p>;
  }
  
  return (
    <div className={classes.burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
