import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import { connect } from "react-redux";



class ManageScreen extends Component {
  static navigationOptions = {
    title: "Decks",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {};
  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_INFO"
    });
  }



  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>this is the manage decks page</Text>
      </View>
    );
  }
}



const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
