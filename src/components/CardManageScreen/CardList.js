import React, { Component } from "react";
import { Text, View, ListView, FlatList, LayoutAnimation } from "react-native";
import {Icon} from 'native-base';
import { connect } from "react-redux";
import CardListItem from './CardListItem';

const CustomLayoutSpring = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7
  }
};

class CardList extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    return null;
  }
  render() {
    console.log("in card list ", this.props.state.cardList);
    return (
      <View style={{ flex: 1 }}>
        {/* {this.noCardsInDeck()} */}
        <FlatList
          data={this.props.state.cardList.cardList}
          renderItem={({ item }) => <CardListItem card={item} />}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(CardList);
