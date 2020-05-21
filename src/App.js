import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

import classes from './app.module.css';
import { COOKIE_TOKEN } from './constants';
import { getCookie } from './utils/cookies';
import * as actions from './store/actions';
import Layout from './hoc/Layout';
import Spinner from './components/UI/Spinner';
import BurgerIngredient from './components/Burger/BurgerIngredients';
import BurderControls from './components/Burger/BurgerControls';


const Admin = React.lazy(() => {
  return import('./containers/Admin');
})
const Auth = React.lazy(() => {
  return import('./containers/Auth');
})
const Burger = React.lazy(() => {
  return import('./containers/Burger');
})
const Checkout = React.lazy(() => {
  return import('./containers/Checkout');
})
const Order = React.lazy(() => {
  return import('./containers/Order');
})
const Profile = React.lazy(() => {
  return import('./containers/Profile');
})
const NotFound = React.lazy(() => {
  return import('./containers/NotFound');
})
const token = getCookie(COOKIE_TOKEN);

const App = (props) => {
  const { onTryAutoSignup, onInitIngredient, onGetProfileUser } = props;
  useEffect(() => {
    onInitIngredient();
    if (token) {
      onTryAutoSignup();
      onGetProfileUser();
    }
  }, [onTryAutoSignup, onInitIngredient, onGetProfileUser]);

  let routes;
  if (props.isAuthenticated) {
    if (props.role === 1) {
      routes = (
        <Switch>
          {/* <Route path='admin' render={(props) => <Admin {...props} />} /> */}
          <Route path='/auth' render={(props) => <Auth {...props} />} />
          <Route path='/profile' render={(props) => <Profile {...props} />} />

        </Switch>
      )
    }
    else {
      routes = (
        <Switch>
          <Route path='/checkout' render={(props) => <Checkout {...props} />} />
          <Route path='/auth' render={(props) => <Auth {...props} />} />
          <Route path='/order' render={(props) => <Order {...props} />} />
          <Route path='/profile' render={(props) => <Profile {...props} />} />
          <Route path='/' exact component={Burger} />
          <Redirect to='/' />
        </Switch>
      )
    }
  } else {
    routes = (
      <Switch>
        <Route path='/admin' exact component={Admin} />
        <Route path='/auth' render={(props) => <Auth {...props} />} />
        {/* //de kiem tra UI thu */}
        {/* <Route path='/order' render={(props) => <Order {...props} />} /> */}
        {/* <Route path='/profile' render={(props) => <Profile {...props} />} /> */}
        <Route path='/' exact component={Burger} />
        <Route component={NotFound} />
      </Switch>
    )
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<Spinner className={classes.spinner} />}>
          {routes}</Suspense>
      </Layout>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token,
  role: state.profile.profile.role
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onInitIngredient: () => dispatch(actions.initIngredients()),
    //map data vao enhance
    onGetProfileUser: () => dispatch(actions.profile_get_data()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
