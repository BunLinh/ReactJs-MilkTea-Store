import React from 'react';
import NavItem from './NavigationItem';
import classes from './styles.module.css';

const NavigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavItem link='/' exact>
           MilkTea Now
        </NavItem>
        {props.isAuthenticated && (
            <React.Fragment>
                <NavItem link='/order'>Orders</NavItem>
                <NavItem link='/profile'>Profile</NavItem>
            </React.Fragment>
        )}
        {!props.isAuthenticated ? (
            <NavItem link='/auth'>Authenticate</NavItem>
        ) : (
                <NavItem link='/logout'>Logout</NavItem>
            )}
    </ul>
)

export default NavigationItems;