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

const cards = [
  {
    prompt: "cat",
    answer: "el cato"
  },
  {
    prompt: "dog",
    answer: "el dogo"
  },
  {
    prompt: "sam",
    answer: "is cute"
  },
  {
    prompt: "trooper",
    answer: "is fluffy"
  }
];

class StudyScreen extends Component {
  state = {
    showAnswer: false
  };
  handlePress = () => {
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

  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            onSwipeLeft={() =>
              this.setState({ showAnswer: !this.state.showAnswer })
            }
            onSwipeRight={() =>
              this.setState({ showAnswer: !this.state.showAnswer })
            }
            renderItem={item => (
              <TouchableWithoutFeedback onPress={this.handlePress}>
                <Card style={{ elevation: 3, height: 300 }}>
                  {this.renderCard(item)}
                </Card>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </Container>
    );
  }
}
export default StudyScreen;
