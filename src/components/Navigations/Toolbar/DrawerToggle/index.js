import React from 'react'

import classes from './style.module.css';

const DrawerToggle = (props) => (
    <div className={classes.drawer__toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle;