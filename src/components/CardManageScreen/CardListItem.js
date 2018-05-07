import React, { Component } from "react";
import { CardItem, Card } from "../common/";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import {Icon} from 'native-base';
import EditCardModal from '../Modals/EditCardModal';
import { connect } from "react-redux";
import {listItemTextStyle, listItemIconStyle, listItemStyle} from '../styles/styles'

class CardListItem extends Component {
  state={
    modalVisible: false,
  }

  handlePress = () => {
    this.setState({
      modalVisible: true,
    })
  };
  //hides modal and dispatches the editted content
  handleEdit = (editCard) =>{
    //need to also send tHE deck to get the updated list
    const payload = {
      card: editCard,
      deck: this.props.state.cardList.deck
    }
    this.hideModal();
    this.props.dispatch({
      type: 'UPDATE_CARD',
      payload: payload
    })
  }
  //hides modal and dispatches the delete
  handleDelete = (deleteCard)=>{
    const payload = {
      card: deleteCard,
      deck: this.props.state.cardList.deck
    }
    this.hideModal();
    this.props.dispatch({
      type: 'DELETE_CARD',
      payload: payload
    })
  }
  //hides modal helper function
  hideModal = () =>{
    this.setState({
      modalVisible: false,
    })
  }

  render(props) {
    return <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={listItemStyle}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Text style={listItemTextStyle}>{this.props.card.prompt}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Icon name="ios-information" style={listItemIconStyle} />
          </View>
          <EditCardModal modalVisible={this.state.modalVisible} card={this.props.card} handleEdit={this.handleEdit} handleDelete={this.handleDelete} hideModal={this.hideModal} />
        </View>
      </TouchableWithoutFeedback>;
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(CardListItem);
