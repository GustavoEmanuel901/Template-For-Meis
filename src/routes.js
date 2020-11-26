import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home'
import InitialAdmin from './pages/InitialAdmin';
import Login from './pages/Login';
import NewOrders from './pages/NewOrders';
import OldOrders from './pages/OldOrders';
import Products from './pages/Products';
import ProductsAdmin from './pages/ProductsAdmin';
import RegisterProduct from './pages/RegisterProduct';
import ResetPassword from './pages/ResetPassword';
import Thank from './pages/Thank';

export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/thank' component={Thank}/>
          <Route path='/aboutUs' component={About}/>
          <Route path='/products' component={Products}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgot_password' component={ForgotPassword}/>
          <Route path='/reset_password' component={ResetPassword}/>
          <Route path='/admin/initial' component={InitialAdmin}/>
          <Route path='/admin/products' component={ProductsAdmin}/>
          <Route path='/admin/add'component={RegisterProduct}/>
          <Route path='/admin/orders/notsent' component={NewOrders}/>
          <Route path='/admin/orders/sent' component={OldOrders}/>
        </Switch>
      </BrowserRouter>
  );
}
