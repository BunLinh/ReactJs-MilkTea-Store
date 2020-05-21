import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';
import Toolbar from '../../components/Navigations/Toolbar';
import SiderBar from '../../components/Navigations/SiderBar';

const Layout =(props)=>{
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () =>{
        setShowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () =>{
        setShowSideDrawer((prevState) => !prevState);
    }
    return(
        <React.Fragment>
            <div className={classes.container}>
            <Toolbar toogleDrawer={sideDrawerToggleHandler} isAuth={props.isAuthenticated}/>
            {/* <SiderBar></SiderBar> */}
            <main className={classes.content}>{props.children}</main>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token,
  });
export default  connect(mapStateToProps)(Layout);