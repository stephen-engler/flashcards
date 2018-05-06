import React, { Component } from "react";
import {
  LayoutAnimation,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Title,
  Left,
  Label,
  Right,
  Text,
  Body,
  Footer,
  FooterTab,
} from "native-base";
import {Button, View, TouchableHighlight} from 'react-native'
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";
import CardList from './CardList';
import AddCardModal from '../Modals/AddCardModal';
import FlashHeader from '../Header/FlashHeader';
import {appBackGroundColor, startButtonTextStyle} from '../styles/styles'

class CardManageScreen extends Component {
  state = {
    modalVisible: false
  };

  handlePress = () => {
    this.props.dispatch(push("/study"));
  };
  
  handleSubmit = payload => {
    this.props.dispatch({
      type: "ADD_CARD",
      payload: {
        answer: payload.answer,
        prompt: payload.prompt,
        deck: this.props.state.cardList.deck
      }
    });
    this.hideModal();
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };
  
  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  
  goBack = () => {
    this.props.dispatch(goBack());
  };

  render() {
    return <Container style={appBackGroundColor}>
        <FlashHeader showModal={this.showModal} goBack={this.goBack} title="Cards" add={true} />
        <Content>
          <CardList />
        </Content>
        <AddCardModal modalVisible={this.state.modalVisible} handleSubmit={this.handleSubmit} hideModal={this.hideModal} />
        <Footer>
          <FooterTab>
            <TouchableHighlight onPress={this.handlePress} style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fafafa" }}>
                <Text style={{ fontSize: 40, color: "#ffc107" }}>
                  Start
                </Text>
              </View>
            </TouchableHighlight>
          </FooterTab>
        </Footer>
      </Container>;
  }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(CardManageScreen);