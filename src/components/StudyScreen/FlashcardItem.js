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
            <CardItem style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.answer}</Text>
            </CardItem>
        );
        }
        return (
            <CardItem style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.prompt}</Text>
            </CardItem>
        );
    };
    render(){
      const  {item} = this.props;
        return(
            <TouchableWithoutFeedback 
              onPress={this.handlePress}>
                <Card style={{ elevation: 3, height: 300, shadowColor: 'red' }}>
                  {this.renderCard(item)}
                </Card>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
  textStyle: {
    fontSize: 24
  },
  cardStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

const mapStateToProps = (state)=>({
    state
})

export default connect(mapStateToProps)(FlashcardItem);