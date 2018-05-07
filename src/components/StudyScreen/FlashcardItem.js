import {
  Container,
  Content,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Button,
  Icon,
} from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import {flashCardItemStyle, flashCardTextStyle, flashCardStyle} from '../styles/styles'

class FlashcardItem extends Component{
    state = {
        showAnswer: false
    };
    static getDerivedStateFromProps(nextProps, prevState){
        return {showAnswer: false};
    }
    handlePress = () => {
        console.log('pressed');
        this.setState({
        showAnswer: true
        });
    };

    renderCard = item => {
        if (this.state.showAnswer) {
        return <CardItem style={flashCardItemStyle}>
            <Text style={flashCardTextStyle}>{item.answer}</Text>
          </CardItem>;
        }
        return (
            <CardItem style={flashCardItemStyle}>
                <Text style={flashCardTextStyle}>{item.prompt}</Text>
            </CardItem>
        );
    };
    render(){
      const  {item} = this.props;
      
        return(
            <TouchableWithoutFeedback 
              onPress={this.handlePress}>
                <Card style={flashCardStyle}>
                  {this.renderCard(item)}
                </Card>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state)=>({
    state
})

export default connect(mapStateToProps)(FlashcardItem);