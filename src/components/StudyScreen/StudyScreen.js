import {
  Container,
  Content,
  Button,
  View,
  Header,
  Icon,
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
import {appBackGroundColor, iconStyle, buttonTextStyle} from '../styles/styles'


class StudyScreen extends Component {
  state={
    cardList: [],
    correct: [],
    incorrect: [],
  }

  static getDerivedStateFromProps(nextProps, prevState){

    return {cardList: nextProps.state.cardList.cardList}
  }

  renderEmptyDeck=()=>{
    console.log('state at render empty deck ', this.state)
    return <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", alignSelf: "center", paddingTop: 150 }}>
        <View style={{ height: 100, width: 300, paddingTop: 20, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>
            You got {this.state.correct.length} right!
          </Text>
          <Text>And {this.state.incorrect.length} wrong</Text>
        </View>
        <View style={{ width: 300, height: 200, alignSelf: "center", alignItems: 'center', justifyContent: 'space-around', flex: 1, flexDirection: 'row', paddingTop: 15 }}>
          <Button transparent onPress={() => this.props.dispatch(goBack())}>
            <Text style={buttonTextStyle}>View Deck</Text>
          </Button>
          <Button transparent onPress={() => this.props.dispatch(push("/manage"))}>
            <Text style = {buttonTextStyle}>Go home</Text>
          </Button>
        </View>
      </View>;
  } 

  goHome=()=>{
    this.props.dispatch(push('/manage'));
  }

  goBack=()=>{
    this.props.dispatch(goBack());
  }

  gotIncorrect = (item) =>{
    this.setState({
      incorrect: [...this.state.incorrect, item]
    })
  }

  gotCorrect = (item) =>{
    this.setState({
      correct: [...this.state.correct, item]
    })
  }

  swipeRightButton=(item)=>{
    this.gotCorrect(item);
    this._deckSwiper._root.swipeRight();
  }

  swipeLeftButton=(item)=>{
    this.gotIncorrect(item);
    this._deckSwiper._root.swipeLeft();
  }

  render() {

    return <Container style={appBackGroundColor}>
        <FlashHeader goHome={this.goHome} goBack={this.goBack} title="Study" />
        <View style={{ flex: 1 }}>
          <DeckSwiper ref={c => (this._deckSwiper = c)} dataSource={this.state.cardList} renderEmpty={this.renderEmptyDeck} looping={false} onSwipeRight={item => this.gotCorrect(item)} onSwipeLeft={item => this.gotIncorrect(item)} renderItem={item => <FlashcardItem item={item} />} />
        </View>

        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 50, right: 50, justifyContent: "space-between", padding: 15 }}>
          <Button large transparent onPress={() => this.swipeLeftButton(this._deckSwiper._root.state.selectedItem)}>
            <Icon name="ios-close-outline" style={{ color: "#ffc107", fontSize: 60 }} />
          </Button>
          <Button large transparent onPress={() => this.swipeRightButton(this._deckSwiper._root.state.selectedItem)}>
            <Icon name="ios-checkmark" style={{ color: "#ffc107", fontSize: 60 }} />
          </Button>
        </View>
      </Container>;
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
