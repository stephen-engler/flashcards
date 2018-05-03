import React from "react";
import { Header, Body, Text, } from "native-base";

const LoginHeader = props => {
  const { headerStyle, iconStyle, headerTextStyle } = styles;
  return (
    <Header style={headerStyle}>
      <Body>
        <Text style={headerTextStyle}>{props.title}</Text>
      </Body>
    </Header>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: "#ff5722"
  },
  headerTextStyle: {
    color: "black",
    fontSize: 40,
    fontWeight: "500",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowRadius: 1,
    textShadowColor: "#26a69a"
  },
  iconStyle: {
    color: "#26a69a",
    fontSize: 40
  }
};

export default LoginHeader;
