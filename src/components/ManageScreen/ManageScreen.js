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
import AddDeckModal from '../Modals/AddDeckModal';
import ProfileModal from '../Modals/ProfileModal';
import FlashHeader from '../Header/FlashHeader';
import {appBackGroundColor} from '../styles/styles'



class ManageScreen extends Component {
  state = {
    modalVisible: false,
    profileModalVisible: false,
    deck_name: ''
  };

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.props.dispatch({
      type: "GET_USER_DECKS"
    });
  };

  

  handleAddDeck=(deck_name)=>{
    this.props.dispatch({
      type: 'ADD_DECK_NAME',
      payload: deck_name,
    })
    this.hideModal();
  }

  handleLogout=()=>{
    this.props.dispatch({
      type: 'LOGOUT_USER'
    })
  }
  hideModal=()=>{
    this.setState({
      modalVisible: false,
      profileModalVisible: false,
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
    
    return <Container style={appBackGroundColor}>
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
        <ProfileModal
          modalVisible={this.state.profileModalVisible}
          hideModal={this.hideModal}
          handleLogout={this.handleLogout}
        />
      </Container>;
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
