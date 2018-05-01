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
import { connect } from "react-redux";

class FlashcardItem extends Component{
    state = {
        showAnswer: false
    };
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('next props ', nextProps);
        console.log('prevState ', prevState);
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
        return (
            <CardItem>
                <Text>{item.prompt}</Text>
                <Text>{item.answer}</Text>
            </CardItem>
        );
        }
        return (
            <CardItem>
                <Text>{item.prompt}</Text>
            </CardItem>
        );
    };
    render(){
      const  {item} = this.props;
        return(
            <TouchableWithoutFeedback 
              onPress={this.handlePress}>
                <Card style={{ elevation: 3, height: 300 }}>
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