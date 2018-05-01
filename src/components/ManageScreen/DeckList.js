import React, { Component } from "react";
import { Text, View, ListView, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from './ListItem';

class DeckList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.state.deckList);
  }

  renderRow = (deck) => {
    return (<ListItem deck={deck} />);
  };
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