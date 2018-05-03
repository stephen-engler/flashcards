import React from "react";
import { Header, Body, Text, } from "native-base";
import {headerBackgroundColor, headerTextStyle} from '../styles/styles'

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
