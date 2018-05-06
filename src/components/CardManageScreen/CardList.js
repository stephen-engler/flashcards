import React, { Component } from "react";
import { Text, View, ListView, FlatList } from "react-native";
import {Icon} from 'native-base';
import { connect } from "react-redux";
import CardListItem from './CardListItem';

class CardList extends Component {

  // noCardsInDeck = ()=>{
  //   if(this.props.state.cardList.cardList != 0 ){
  //     return <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", paddingLeft: 15 }}>
  //         <Text>Add a card here</Text>
  //         <Icon name="arrow-up"/>
  //       </View>;
  //   }
  // }

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
