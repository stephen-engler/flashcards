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
import {appBackGroundColor} from '../styles/styles'


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
          <Button onPress={() => this.props.dispatch(goBack())}>
            <Text>View Deck</Text>
          </Button>
          <Button onPress={() => this.props.dispatch(push("/manage"))}>
            <Text>Go home</Text>
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

  render() {

    return <Container style={appBackGroundColor}>
        <FlashHeader goHome={this.goHome} goBack={this.goBack} title="Study" />
        <View style={{ flex: 1 }}>
          <DeckSwiper ref={c => (this._deckSwiper = c)} dataSource={this.state.cardList} renderEmpty={this.renderEmptyDeck} looping={false} onSwipeRight={item => this.gotCorrect(item)} onSwipeLeft={item => this.gotIncorrect(item)} renderItem={item => <FlashcardItem item={item} />} />
        </View>

        {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: "space-between", padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View> */}
      </Container>;
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
