//react
import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Alert
} from "react-native";
import {CardItem, Card, Icon, Right} from 'native-base'
import { connect } from "react-redux";
//Custom Component
import EditDeleteDeckModal from '../Modals/EditDeleteDeckModal';
//Styles
import {listItemTextStyle, listItemStyle, listItemIconStyle} from '../styles/styles'

//Comp responsible for rendering each list item
//expects the deck object as a prop
class ListItem extends Component{
    state = {
        modalVisible: false,
    }
    //deck selected is saved in redux store on press
    handlePress=()=>{
        console.log('pressed');
        this.props.dispatch({
            type: 'USER_SELECTED_DECK',
            payload: this.props.deck
        })
    }
    //changes state to hide modal
    hideModal = () =>{
        this.setState({
            modalVisible: false
        })
    }
    //dispatches updated deck to saga and hides modal, expects deck object
    handleEdit = (deck) =>{
        console.log('in handle edit ', deck);
        this.props.dispatch({
            type: 'UPDATE_DECK',
            payload: deck,
        })
        this.hideModal();
    }
    //dispatches deck to saga to be deleted, expects deck object, hides modal
    handleDelete = (deck) =>{
        console.log('in handle delete ', deck);
        this.props.dispatch({ 
            type: "DELETE_DECK", 
            payload: deck 
        });
        this.hideModal();
    }

    render(props){
        const {deck} = this.props
        return <TouchableOpacity 
                    onPress={this.handlePress} 
                    onLongPress={() => this.setState(
                        { modalVisible: true }
              )}>
            <View>
              <View style={listItemStyle}>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text style={listItemTextStyle}>
                    {deck.deck_name}
                  </Text>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Icon name="ios-arrow-forward" style={listItemIconStyle} />
                </View>
              </View>
              <EditDeleteDeckModal 
                deck={deck} 
                modalVisible={this.state.modalVisible} 
                hideModal={this.hideModal} 
                handleEdit={this.handleEdit} 
                handleDelete={this.handleDelete} 
                />
            </View>
          </TouchableOpacity>;
    }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(ListItem);
