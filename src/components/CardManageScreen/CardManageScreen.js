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
import { push } from "react-router-redux";
import CardList from './CardList';
import AddCardModal from './AddCardModal';

class CardManageScreen extends Component {
  state = {
    modalVisible: false,
  };

 
  handlePress = () => {
    this.props.dispatch(push("/study"));
  };
  handleSubmit=(payload)=>{

      this.props.dispatch({
        type: 'ADD_CARD',
        payload: {answer: payload.answer, prompt: payload.prompt, deck: this.props.state.cardList.deck},
      })
      this.setState({ modalVisible: false });
  
  }

  render() {
    return (
    <Container>
        <Header>
          <Body>
            <Text>{this.props.state.cardList.deck.deck_name}</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.setState({
                  modalVisible: true
                })}>
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <CardList />
        </Content>
        <AddCardModal 
          modalVisible={this.state.modalVisible} 
          handleSubmit={this.handleSubmit} 
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