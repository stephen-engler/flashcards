import React, { Component } from "react";
import {push, goBack} from 'react-router-redux';
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
import AddDeckModal from '../Modals/AddDeckModal'
import FlashHeader from '../Header/FlashHeader';



class ManageScreen extends Component {
  state = {
    modalVisible: false,
    profileModalVisible: false,
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
    this.hideModal();
  }

  hideModal=()=>{
    this.setState({
      modalVisible: false,
    })
  }

  showModal = ()=>{
    this.setState({
      modalVisible: true,
    })
  }

  goBack = () =>{
    this.props.dispatch(goBack())
  }

  showProfileModal = ()=>{
    this.setState({
      profileModalVisible: true,
    })
  }
  render() {
    
    return <Container>
        <FlashHeader 
        goBack={this.goBack}
        showModal={this.showModal}
        title='Decks'
        add={true}
        profile={true}
        showProfileModal={this.showProfileModal}
        />
        <Content>
          <DeckList />
        </Content>
        <AddDeckModal 
          modalVisible={this.state.modalVisible} 
          handleAddDeck={this.handleAddDeck}
          hideModal={this.hideModal}
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
