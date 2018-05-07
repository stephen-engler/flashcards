import React, { Component } from "react";
import { View, FlatList, LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import ListItem from './ListItem';

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
  
  static getDerivedStateFromProps(nextProps, prevState) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    return null;
  }

  render() {
    console.log("in decklist ", this.props.state.deckList);
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