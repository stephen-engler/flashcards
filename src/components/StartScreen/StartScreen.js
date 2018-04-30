import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import {connect} from 'react-redux';

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};

class StartScreen extends Component {
  static navigationOptions = {
    title: "Welcome",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {

  }
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USER_INFO'
    })
  }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   if (nextProps.state.userInfo.user.id >0) {
  //     nextProps.navigation.navigate("Study");
  //   } else if (nextProps.state.userInfo.user.id == null) {
  //     nextProps.navigation.navigate("Login");
  //   }
  //   return null;
  // }

  render() {
        if (this.props.state.userInfo.user.id > 0) {
          this.props.navigation.navigate("Study");
        }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animatable.Text
          style={styles.flashStyle}
          animation="swing"
          duration={2000}
          iterationCount={Infinity}
        >
          Flash
        </Animatable.Text>
        <Animatable.Text
          style={styles.cardsStyle}
          animation="tada"
          duration={2000}
          direction="alternate"
          iterationCount={Infinity}
        >
          Cards
        </Animatable.Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Study")}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}

const styles = {
  flashStyle: {
    fontSize: 50,
    color: "red"
  },
  cardsStyle: {
    fontSize: 50,
    color: "orange"
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StartScreen);

