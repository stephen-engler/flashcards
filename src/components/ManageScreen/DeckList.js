//react
import React, { Component } from "react";
import { View, FlatList, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
//custom components
import ListItem from './ListItem';
//Animation
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

class DeckList extends Component {
  //called when componenet is initialized and state changes
  //sets up animation for when view is navigated tof
  static getDerivedStateFromProps(nextProps, prevState) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    return null;
  }

  render() {
    //Flat list iterates over deck with decklist from redux store
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.state.deckList}
          renderItem={({ item }) => <ListItem deck={item} />}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(DeckList);