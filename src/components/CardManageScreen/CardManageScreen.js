//React
import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
} from "native-base";
//Redux
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";
//Custom componenets
import AnimateView from '../common/AnimateView';
import CardList from "./CardList";
import AddCardModal from "../Modals/AddCardModal";
import FlashHeader from "../Header/FlashHeader";
import StartButton from './StartButton';
//Styles
import { appBackGroundColor, startButtonTextStyle } from "../styles/styles";

//Parent component to the other card components
//sets up structure of the page with header/footer and animation
class CardManageScreen extends Component {
  state = {
    modalVisible: false
  };
  //navigates the user to the study view
  handleStart = () => {
    this.props.dispatch(push("/study"));
  };
  //dispatches ADD_CARD and hides modal
  //payload {answer: userInput, prompt: userInput, deck: deck from redux store, need the id }
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
  //changes state to hide modal
  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };
  //changes statet to show modal
  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  //navigates user to previos screen
  goBack = () => {
    this.props.dispatch(goBack());
  };

  render() {
    return <AnimateView>
        <Container style={appBackGroundColor}>
          {/* Header, needs function for showing modal, going back, title, and whether there is an add button */}
          <FlashHeader 
            showModal={this.showModal} 
            goBack={this.goBack} 
            title="Cards" 
            add={true} 
            />
          <Content>
            {/* CardList component is statefull and self contained */}
            <CardList />
          </Content>
        {/* when modalVisible is true, modal is shown, needs function to handle submit and to hide itself */}
          <AddCardModal 
            modalVisible={this.state.modalVisible} 
            handleSubmit={this.handleSubmit} 
            hideModal={this.hideModal}   
          />
          <Footer>
            <FooterTab>
              {/* Custom start button, needs function to handle start */}
              <StartButton 
                handlePress={this.handleStart}
              />
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