import React from 'react';

import classes from './styles.module.css';
import MilkTeaIngredients from './MilkTeaIngredients';

const MilkTea = (props) => {
  if (!props.ingredients) return null;
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // console.log(props.ingredients + '------');
      
      const number = props.ingredients[igKey];
      const listMilkTeaIngredient = [];
      for (let el = 1; el <= number; el += 1) {
        listMilkTeaIngredient.push(<MilkTeaIngredients key={igKey + el} type={igKey} />);
      }
      return listMilkTeaIngredient;
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p className={classes.txt_toping}>Add Toping for delicious!</p>;
  }
  
  return (
    <div className={classes.burger}>
      <MilkTeaIngredients type='bread-top' />
      {transformedIngredients}
      <MilkTeaIngredients type='bread-bottom' />
    </div>
  );
};

export default MilkTea;
