//React
import React from "react";
import { Header, Body, Text, } from "native-base";
//Styles
import {headerBackgroundColor, headerTextStyle} from '../styles/styles'
//Stateless comp, returns header for login 
const LoginHeader = props => {
  return (
    <Header style={headerBackgroundColor}>
      <Body>
        <Text style={headerTextStyle}>{props.title}</Text>
      </Body>
    </Header>
  );
};

export default LoginHeader;
