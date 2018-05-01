import React, { Component } from "react";
import { Text, View, ListView, FlatList } from "react-native";
import { connect } from "react-redux";
import CardListItem from './CardListItem';

class CardList extends Component {


  render() {
    console.log("in card list ", this.props.state.cardList);
    return (
      <View style={{ flex: 1 }}>
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
