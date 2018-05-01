import React, { Component } from "react";
import { CardItem, Card } from "../common/";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";

class CardListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  handlePress = () => {
    console.log("pressed");
    // this.props.dispatch({
    //   type: "USER_SELECTED_DECK",
    //   payload: this.props.deck
    // });
  };

  render(props) {
    console.log("in list item", this.props);
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View>
          <Card>
            <CardItem>
              <Text style={styles.textStyle}>{this.props.card.prompt}</Text>
            </CardItem>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 24
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(CardListItem);
