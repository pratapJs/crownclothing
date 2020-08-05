import React from 'react';
import Signin from '../../components/signin/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SigninSignup.scss';

const SigninSignup = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
