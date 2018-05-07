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
            {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: "space-between", padding: 15 }}>
              <Button iconLeft onPress={() => this.props.swipeLeft}>
                <Icon name="arrow-back" />
                <Text>Swipe Left</Text>
              </Button>
              <Button iconRight onPress={() => deckSwiper.swipeRight()}>
                <Text>Swipe Right</Text>
                <Icon name="arrow-forward" />
              </Button>
            </View> */}
          </CardItem>;
        }
        return (
            <CardItem style={flashCardItemStyle}>
                <Text style={flashCardTextStyle}>{item.prompt}</Text>
            </CardItem>
        );
    };
    render(){
      const  {item, deckSwiper} = this.props;
      
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