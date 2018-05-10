import {
  Container,
  Button,
  View,
  Icon,
  DeckSwiper,
  Text,
} from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { push, goBack } from "react-router-redux";
//Custom Components
import FlashcardItem from './FlashcardItem';
import EmptyDeck from './EmptyDeck';
import FlashHeader from '../Header/FlashHeader';
import AnimateView from '../common/AnimateView';
//Styles
import {appBackGroundColor, studyScreenView} from '../styles/styles'

class StudyScreen extends Component {
  state={
    cardList: [],
    correct: [],
    incorrect: [],
    xValue: ''
  }
  //makes sure state.cardList reflexs the redux store state
  static getDerivedStateFromProps(nextProps, prevState){
    return {cardList: nextProps.state.cardList.cardList, correct: [], incorrect: []}
  }
  //called when deck is empty, shows done screen
  renderEmptyDeck=()=>{
    console.log('state at render empty deck ', this.state)
    return <EmptyDeck 
      correct={this.state.correct.length}
      incorrect={this.state.incorrect.length}
      goBack={this.goBack}
      goHome={this.goHome}
    />;
  } 
  //dispatch to manage screen
  goHome=()=>{
    this.props.dispatch(push('/manage'));
  }
  //dispatch to previous screen
  goBack=()=>{
    this.props.dispatch(goBack());
  }
  //adds item state.correct array
  gotCorrect = (item) =>{
    this.setState({
      correct: [...this.state.correct, item]
    })
  }
  //adds item to state.incorrect array
  gotIncorrect = (item) =>{
    this.setState({
      incorrect: [...this.state.incorrect, item]
    })
    console.log(item)
  }
  //called when user presses the check button, adds item to state and swipes deck right 
  //buttons pass in the root state of the deckswiper component
  swipeRightButton=(item)=>{
    this.gotCorrect(item);
    this._deckSwiper._root.swipeRight();
  }
  //called when user presses x button, adds item to state and swipes deck left
  swipeLeftButton=(item)=>{
    this.gotIncorrect(item);
    this._deckSwiper._root.swipeLeft();
  }

  // renderTest(){
  //   if (this._deckSwiper) {
  //     const xValue = JSON.stringify(this._deckSwiper._root.state.pan.x)

  //     return(
  //       <Text>{xValue}</Text>
  //     )
  //   }
  // }

  render() {
    if(this._deckSwiper){
    console.log(this._deckSwiper._root.state.pan)
    }
    return <AnimateView>
        <Container style={appBackGroundColor}>
          <FlashHeader goHome={this.goHome} goBack={this.goBack} title="Study" />
          <View style={{ flex: 1 }}>
            {/* <Text>
              {this._deckSwiper &&
                JSON.stringify(this._deckSwiper._root.state.pan.x)}
            </Text> */}
            <DeckSwiper 
              ref={c => (this._deckSwiper = c)} 
              dataSource={this.state.cardList} 
              renderEmpty={this.renderEmptyDeck} 
              looping={false} 
              onSwipeRight={item => this.gotCorrect(item)} 
              onSwipeLeft={item => this.gotIncorrect(item)} 
              renderItem={item => <FlashcardItem item={item} deckSwiper={this._deckSwiper}/>} 
              />
          </View>
          <View style={studyScreenView}>
            <Button large transparent onPress={() => this.swipeLeftButton(this._deckSwiper._root.state.selectedItem)}>
              <Icon name="ios-close-outline" style={{ color: "#ffc107", fontSize: 60 }} />
            </Button>
            <Button large transparent onPress={() => this.swipeRightButton(this._deckSwiper._root.state.selectedItem)}>
              <Icon name="ios-checkmark" style={{ color: "#ffc107", fontSize: 60 }} />
            </Button>
          </View>
        </Container>
      </AnimateView>;
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
