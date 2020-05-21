import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import ManageUser from './ManageUser';
import classes from './styles.module.css';
import MenuItems from '../../components/Menu';

const { SubMenu } = Menu;
const { Content, Footer, Sider, } = Layout;

const Admin = () => {
    return (
   <div className={classes.admin}>
       <div className={classes.siderBar}>
           <MenuItems></MenuItems>
       </div>
       <div className={classes.content}>
           <ManageUser></ManageUser>
       </div>
   </div>
       
    )
}
export default Admin