import React, { Component } from "react";
// import { CardItem, Card } from '../common/';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Alert
} from "react-native";
import {CardItem, Card, Icon, Right} from 'native-base'
import { connect } from "react-redux";
import EditDeleteDeckModal from '../Modals/EditDeleteDeckModal';
import {listItemTextStyle} from '../styles/styles'

class ListItem extends Component{
    state = {
        modalVisible: false,
    }

    handlePress=()=>{
        console.log('pressed');
        this.props.dispatch({
            type: 'USER_SELECTED_DECK',
            payload: this.props.deck
        })
    }
    hideModal = () =>{
        this.setState({
            modalVisible: false
        })
    }
    handleEdit = (deck) =>{
        console.log('in handle edit ', deck);
        this.props.dispatch({
            type: 'UPDATE_DECK',
            payload: deck,
        })
        this.hideModal();
    }
    handleDelete = (deck) =>{
        console.log('in handle delete ', deck);
        Alert.alert(
            'Are you sure?',
            `A deleted deck can't be recovered`,
            [
                {text: 'Cancel', onPress:()=>console.log('canceld'), style: 'cancel'},
                {text: 'Ok', onPress:()=>this.deleteConfirmed(deck)}
            ]
        )

    }

    deleteConfirmed=(deck)=>{
        this.props.dispatch({type:'DELETE_DECK', payload: deck});
        this.hideModal();
    }

    render(props){
        console.log('in list item', props);
        return <TouchableWithoutFeedback onPress={this.handlePress} onLongPress={() => this.setState(
                { modalVisible: true }
              )}>
            <View>
              <Card>
                <CardItem>
                  <Text style={listItemTextStyle}>
                    {this.props.deck.deck_name}
                  </Text>
                  <View style={{alignItems: 'flex-end'}}>

                  <Icon name="ios-arrow-forward" style={{alignSelf: 'flex-end'}}/>
                  </View>
                </CardItem>
              </Card>
              <EditDeleteDeckModal deck={this.props.deck} modalVisible={this.state.modalVisible} hideModal={this.hideModal} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
            </View>
          </TouchableWithoutFeedback>;
    }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(ListItem);
