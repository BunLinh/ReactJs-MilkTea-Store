import React from 'react';

import MenuItem from './MenuItem';
import classes from './styles.module.css';
import Home from '../../assets/images/home.png';
import ManageOrder from '../../assets/images/business.png';
import ManageUser from '../../assets/images/manageUser.svg';
import ManageContact from '../../assets/images/contact.svg';

const MenuItems = (props) => {
    // if(props.profile.profile.role === 1 )
    return(
        <React.Fragment>
        <ul className={classes.menu}>
            <MenuItem link='/' exact>
                <img src={Home}/>
                Home
       </MenuItem>
            <MenuItem link='/user'>
            <img src={ManageUser}/>
                Manage User
       </MenuItem>
            <MenuItem link='/manageOrder'>
            <img src={ManageOrder}/>
                Manage Order
       </MenuItem>
            <MenuItem link='/manageContact'>
            <img src={ManageContact}/>
                Manage Contact
       </MenuItem>
        </ul>
        </React.Fragment>
    )
}

export default MenuItems;