import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
} from "native-base";
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";

import {appBackGroundColor, startButtonTextStyle} from '../styles/styles';

import AnimateView from '../common/AnimateView';
import CardList from "./CardList";
import AddCardModal from "../Modals/AddCardModal";
import FlashHeader from "../Header/FlashHeader";
import StartButton from './StartButton';


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
    return <AnimateView>
        <Container style={appBackGroundColor}>
          
          <FlashHeader showModal={this.showModal} goBack={this.goBack} title="Cards" add={true} />

          <Content>
            <CardList />
          </Content>

          <AddCardModal modalVisible={this.state.modalVisible} handleSubmit={this.handleSubmit} hideModal={this.hideModal} />
          
          <Footer>
            <FooterTab>
              <StartButton handlePress={this.handlePress}/>
            </FooterTab>
          </Footer>
        
        </Container>
      </AnimateView>;
  }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(CardManageScreen);