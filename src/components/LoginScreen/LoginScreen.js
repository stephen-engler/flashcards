//react
import React from "react";
import {
  Container
} from "native-base";
//Custom components
import LoginHeader from '../Header/LoginHeader';
import LoginForm from './LoginForm';
//Renders the header and the form
const LoginScreen = ()=> {
  return (
    <Container>
      <LoginHeader title='Flash Cards'/>
      <LoginForm />
    </Container>
  );
}

export default LoginScreen;
