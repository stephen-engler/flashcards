import {
  Container,
  Content,
  View,
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


class StudyScreen extends Component {
  state = {
    showAnswer: false
  };

 componentDidMount(){ 
  } 

  render() {
    return <Container>
        <View>
          <DeckSwiper 
            dataSource={this.props.state.cardList.cardList} 
            renderItem={item =>  
              <FlashcardItem item={item}/>}
            />
        </View>
      </Container>;
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(StudyScreen);
