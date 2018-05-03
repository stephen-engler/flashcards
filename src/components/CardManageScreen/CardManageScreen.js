import React, { Component } from "react";
import {
  LayoutAnimation,
} from "react-native";
import {
  Button,
  Container,
  Content,
  View,
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
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";
import CardList from './CardList';
import AddCardModal from '../Modals/AddCardModal';
import FlashHeader from '../Header/FlashHeader';

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
    return (
      <Container>
        <FlashHeader 
        showModal={this.showModal}
        goBack={this.goBack}
        title = {this.props.state.cardList.deck.deck_name}
        add={true}
        />
        <Content>
          <CardList />
        </Content>
        <AddCardModal
          modalVisible={this.state.modalVisible}
          handleSubmit={this.handleSubmit}
          hideModal={this.hideModal}
        />
        <Footer>
          <FooterTab>
            <Button full primary onPress={this.handlePress}>
              <Text style={styles.buttonStyle}>Start</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = {
  buttonStyle:{
    fontSize: 20,
    color: "white"
  }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(CardManageScreen);