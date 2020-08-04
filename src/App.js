import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SigninSignup from './pages/Signin-Signup/SigninSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
