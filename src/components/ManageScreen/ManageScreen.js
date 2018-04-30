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

  handlePressFor=(deck)=>{
    return()=>{
      this.props.dispatch({
        type: 'GET_CARDS',
        payload: deck
      })
    }
  }

  handlePress=()=>{
    console.log('pressed')
  }


  render() {
    const deckList = this.props.state.deckList.map(deck => {
      return (
        
          <ListItem button={true}>
            <Text>{deck.deck_name}</Text>
          </ListItem>
        

      )
    });
    return (
      <Container>
        <Header>
          <Body>
            <Text>Cards</Text>
          </Body>
        </Header>
        <Content>
          <List>{deckList}</List>
        </Content>
      </Container>
    );
  }
}



const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
