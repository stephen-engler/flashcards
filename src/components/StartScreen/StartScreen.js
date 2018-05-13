import React, { Component } from "react";
import {  View } from "react-native";
import {Container, Header, Body, Text, Spinner} from 'native-base';
import {connect} from 'react-redux';
import {Link} from 'react-router-native';
import { headerBackgroundColor, headerTextStyle, appBackGroundColor} from '../styles/styles'



class StartScreen extends Component {

  state = {
    loading: false,
  }
  componentDidMount() {
    console.log('in startscreen')
    this.props.dispatch({
      type: 'GET_USER_INFO'
    })
    // this.renderLoading();
  }

  // renderLoading=()=>{
  //   setTimeout(()=>this.setState({loading: true}), 1000);
  // }


  render() {

    return <Container style={appBackGroundColor}>
        <Header style={headerBackgroundColor}>
          <Body>
            <Text style={headerTextStyle}>Flash Cards</Text>
          </Body>
        </Header>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          {this.loading && <Spinner color='red' />}
        </View>
      </Container>;
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

