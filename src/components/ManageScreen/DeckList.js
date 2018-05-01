import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from './ListItem';

class DeckList extends Component {

  render(){
      console.log('in decklist ', this.props.state.deckList);
      return(
          <View style={{flex: 1}}>
            <FlatList
                data={this.props.state.deckList}
                renderItem={({item})=><ListItem deck={item}/>}
            />
          </View>
      )
  }

}
const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(DeckList);