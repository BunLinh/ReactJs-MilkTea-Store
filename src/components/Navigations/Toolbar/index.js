import React from 'react';

import DrawerToggle from './DrawerToggle';
import classes from './style.module.css';
import NavigationItems from '../NavigatiomItems';
import Logo from '../../Logo';

const Toolbar = (props) => (
    <header className={classes.toolbar}>
        <DrawerToggle clicked={props.toogleDrawer} />
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
)
export default Toolbar;