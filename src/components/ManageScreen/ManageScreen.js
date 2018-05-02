import React, { Component } from "react";
import {push} from 'react-router-redux';
import { Platform, StyleSheet, LayoutAnimation, TouchableHighlight } from "react-native";
import {
  Icon,
  Button,
  Container,
  Form,
  Item,
  Content,
  View,
  Header,
  Title,
  Left,
  Right,
  Text,
  Body,
} from "native-base";
import DeckList from './DeckList';
import { connect } from "react-redux";
import AddDeckModal from './AddDeckModal';



class ManageScreen extends Component {
  state = {
    modalVisible: false,
    deck_name: ''
  };

  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_DECKS"
    });
  }

  handleAddDeck=(deck_name)=>{
    this.props.dispatch({
      type: 'ADD_DECK_NAME',
      payload: deck_name,
    })
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    
    return <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent>
              <Text>Back</Text>
              <Icon ios="ios-menu" />
            </Button>
          </Left>

          <Body>
            <Text style={styles.headerTextStyle}>Decks</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.setState({
                  modalVisible: true
                })}>
              <Icon name="ios-add" />
            </Button>
          </Right>
        </Header>
        <Content>
          <DeckList />
        </Content>
        <AddDeckModal 
          modalVisible={this.state.modalVisible} 
          handleAddDeck={this.handleAddDeck}
        />
      </Container>;
  }
}

const styles = {
  headerStyle: {
    backgroundColor: "orange"
  },
  headerTextStyle: {
    color: "white",
    fontSize: 45,
    fontWeight: "500",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowRadius: 1,
    textShadowColor: "#000"
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
