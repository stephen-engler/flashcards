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


class StudyScreen extends Component {
  state = {
    showAnswer: false,
    startOver: false,
  };

  renderEmptyDeck=()=>{
    return (
    <Card style={{ elevation: 3, height: 300, shadowColor: "red" }}>
      <CardItem>
        <Button onPress={()=>this.props.dispatch(push('/cards'))}>
          <Text>View Deck</Text>
        </Button>
        <Button onPress={()=>this.props.dispatch(push('/manage'))}>
          <Text>Go home</Text>
        </Button>
      </CardItem>
    </Card>
    
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
        <Container>
          <FlashHeader 
          goHome={this.goHome}
          goBack={this.goBack}
          title={this.props.state.cardList.deck.deck_name}
          />
          <View>
            <DeckSwiper 
              dataSource={this.props.state.cardList.cardList} 
              renderEmpty={this.renderEmptyDeck}
              looping={false}
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
