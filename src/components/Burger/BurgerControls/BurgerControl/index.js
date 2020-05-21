import React from 'react';
import classes from './styles.module.css';

import { Button } from 'antd';


const BuildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.label}>
     <img className={classes.icon} src= {props.icon}/>
     <span>{props.label}</span> </div>
    <Button onClick={props.remove} disabled={props.disabled}>
      Less
    </Button>
    <Button  type='primary' block htmlType='submit' className={classes.button} onClick={props.added}>
      More
    </Button>
  </div>
);

export default BuildControl;
