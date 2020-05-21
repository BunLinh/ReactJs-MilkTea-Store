import React from 'react'

import {version} from '../../../package.json';
import burgerLogo from '../../assets/images/iconTea.svg';
import classes from './style.module.css';

const Logo = () => (
    <div className={classes.logo}>
        <img src={burgerLogo} alt='logoburger' />
        <span style={{ marginLeft: '25px', color: 'white' }}>Version {version}</span>
    </div>
)

export default Logo;