import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, LayoutAnimation, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
  View,
  Header,
  Title,
  Left,
  Right,
  Icon,
  Text,
  Body,
  List,
  ListItem,
} from "native-base";
import DeckList from './DeckList';
import { connect } from "react-redux";



class ManageScreen extends Component {
  state = {};

  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_DECKS"
    });
  }

  render() {
    
    return (
      <Container>
        <Header>
          <Body>
            <Text>Decks</Text>
          </Body>
        </Header>
        <Content>
          <DeckList/>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
