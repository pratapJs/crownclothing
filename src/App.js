import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/Header/Header';
import SigninSignup from './pages/Signin-Signup/SigninSignup';
import { auth } from './Firebase/Firebase.util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SigninSignup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
