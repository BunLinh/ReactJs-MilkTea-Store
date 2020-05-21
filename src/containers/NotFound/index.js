import React from 'react';
import notFound from '../../assets/images/notFound.JPG';
import classes from './styles.module.css';

const NotFound =()=>{
    return(
        <div className={classes.not__found}>
            <img src={notFound} alt=''/>
        </div>
    )
} 
export default NotFound;