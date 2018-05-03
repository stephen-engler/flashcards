import React from "react";
import {
  Container
} from "native-base";

import LoginHeader from '../Header/LoginHeader';
import LoginForm from './LoginForm';

const LoginScreen = ()=> {
  return (
    <Container>
      <LoginHeader title='Flash Cards'/>
      <LoginForm />
    </Container>
  );
}

export default LoginScreen;
