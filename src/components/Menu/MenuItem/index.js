import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './styles.module.css';

const MenuItem = (props) =>{
    return (
        <li className={classes.menuItem}>
            <NavLink to={props.link} activeClassName={classes.active} exact={props.exact}>
            {props.children}
            </NavLink>
        </li>
    )
}
export default MenuItem