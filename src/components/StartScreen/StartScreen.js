import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import * as Animatable from "react-native-animatable";
import {connect} from 'react-redux';
import {Link} from 'react-router-native';
import {push} from 'react-router-redux';


class StartScreen extends Component {

  state = {

  }
  componentDidMount() {
    console.log('in startscreen')
    this.props.dispatch({
      type: 'GET_USER_INFO'
    })
  }


  render() {

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
          onPress={() => this.props.dispatch(push('/study'))}
        />
        <Button
          title="Login"
          onPress={() => this.props.dispatch(push('/login'))}
        />
        <Button
          title="Sign up"
          onPress={() => this.props.dispatch(push('/signin'))}
        />
        <Button
          title='manage'
          onPress={()=>this.props.dispatch(push('/manage'))}
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

