import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  Platform,
  StyleSheet,
  LayoutAnimation,
  TouchableHighlight
} from "react-native";
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
  ListItem
} from "native-base";
import { connect } from "react-redux";
import CardList from './CardList';

class CardManageScreen extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>{this.props.state.cardList.deck.deck_name}</Text>
          </Body>
        </Header>
        <Content>
          <CardList />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(CardManageScreen);