import React, { Component } from "react";
import { Text, View, ListView, FlatList, LayoutAnimation } from "react-native";
import {Icon} from 'native-base';
import { connect } from "react-redux";
import CardListItem from './CardListItem';
//configuration for the animation when view is loaded
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
  state={};
  //called when the component is initialized or anytime state changes
  static getDerivedStateFromProps(nextProps, prevState) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
    //must return an object to update state or null
    return null;
  }
  render() {
    //destructures the cardlist array out of redux store
    const { cardList } = this.props.state.cardList;
    return (
      <View style={{ flex: 1 }}>
        {/* FlatList iterates over the array */}
        <FlatList
          keyExtractor={item=>item.prompt}
          data={cardList}
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
