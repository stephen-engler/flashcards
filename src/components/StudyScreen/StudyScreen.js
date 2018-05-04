import {
  Container,
  Content,
  Button,
  View,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Left,
  Body
} from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import React, { Component } from "react";
import { connect } from 'react-redux';
import FlashcardItem from './FlashcardItem';
import {push, goBack} from 'react-router-redux';
import FlashHeader from '../Header/FlashHeader';
import {appBackGroundColor} from '../styles/styles'


class StudyScreen extends Component {
  state = {
    showAnswer: false,
    startOver: false,
  };

  renderEmptyDeck=()=>{
    return (
      <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", alignSelf: "center", paddingTop: 200 }}>

          <Button onPress={() => this.props.dispatch(push("/cards"))}>
            <Text>View Deck</Text>
          </Button>
          <View style={{alignSelf: 'center', paddingTop: 15}}>
            <Button onPress={() => this.props.dispatch(push("/manage"))}>
              <Text>Go home</Text>
            </Button>
          </View>
      </View>
    );
  } 

  goHome=()=>{
    this.props.dispatch(push('/manage'));
  }

  goBack=()=>{
    this.props.dispatch(goBack());
  }

  render() {
    return (
        <Container style = {appBackGroundColor}>
          <FlashHeader 
          goHome={this.goHome}
          goBack={this.goBack}
          title='Study'
          />
          <View style={{flex: 1}}>
            <DeckSwiper 
              dataSource={this.props.state.cardList.cardList} 
              renderEmpty={this.renderEmptyDeck}
              looping={false}
              onSwipeRight={item=>console.log("swipped right ", item)}
              onSwipeLeft={item=>console.log('swipped left ', item)}
              renderItem={item => <FlashcardItem item={item} 
              />} 
            />
          </View>
        </Container>
    );
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
