import React, { Component } from "react";
import {push, goBack} from 'react-router-redux';
import { Platform, StyleSheet, LayoutAnimation, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
} from "native-base";
import { connect } from "react-redux";
//Custom Components
import AddDeckModal from '../Modals/AddDeckModal';
import ProfileModal from '../Modals/ProfileModal';
import FlashHeader from '../Header/FlashHeader';
import AnimateView from '../common/AnimateView';
import DeckList from "./DeckList";
//Styles
import {appBackGroundColor} from '../styles/styles'


class ManageScreen extends Component {
  state = {
    modalVisible: false,
    profileModalVisible: false,
    deck_name: ''
  };
  //gets all decks associated with user on mount
  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_DECKS"
    });
  };
  //dispatchs to saga, expects a string
  handleAddDeck=(deck_name)=>{
    this.props.dispatch({
      type: 'ADD_DECK_NAME',
      payload: deck_name,
    })
    this.hideModal();
  }
  //dispatches to log out user
  handleLogout=()=>{
    this.props.dispatch({
      type: 'LOGOUT_USER'
    })
  }
  //hides modal
  hideModal=()=>{
    this.setState({
      modalVisible: false,
      profileModalVisible: false,
    })
  }
  // shows modal
  showModal = ()=>{
    this.setState({
      modalVisible: true,
    })
  }
  // navigates user to the previous screen
  goBack = () =>{
    this.props.dispatch(goBack())
  }

  showProfileModal = ()=>{
    this.setState({
      profileModalVisible: true,
    })
  }
  
  render() {
    return <AnimateView>
        <Container style={appBackGroundColor}>
        {/* Renders header */}
            <FlashHeader 
            goBack={this.goBack}
            showModal={this.showModal}
            title='Decks'
            add={true}
            profile={true}
            showProfileModal={this.showProfileModal}
            />
            {/* Self contained comp to render decklist */}
            <Content>
              <DeckList />
            </Content>
            {/* Initialize modals, won't be shown unless state is true */}
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
          </Container>
      </AnimateView>;
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
