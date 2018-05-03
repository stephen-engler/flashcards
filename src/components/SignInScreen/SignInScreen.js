import React from "react";
import {
  Container,
} from "native-base";

import LoginHeader from '../Header/LoginHeader';
import SignInForm from './SignInForm';


const SignInScreen =()=> {

  return (
    <Container>
      <LoginHeader title='Flash Cards'/>
      <SignInForm />
    </Container>
  );
}


export default SignInScreen;
