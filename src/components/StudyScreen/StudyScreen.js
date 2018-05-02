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
import {push} from 'react-router-redux';


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

  render() {
    return (
        <Container>
          <Header style={styles.headerStyle}>
            <Body>
              <Text style={styles.headerTextStyle}>{this.props.state.cardList.deck.deck_name}</Text>
            </Body>
          </Header>
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

const styles = {
  headerStyle: {
    backgroundColor: "orange"
  },
  headerTextStyle: {
    color: "red",
    fontSize: 24,
    fontWeight: "500",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowColor: '#000',
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
