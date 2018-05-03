import React, { Component } from "react";
import { CardItem, Card } from "../common/";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import EditCardModal from '../Modals/EditCardModal';
import { connect } from "react-redux";

class CardListItem extends Component {
  state={
    modalVisible: false,
  }

  handlePress = () => {
    console.log("pressed");
    this.setState({
      modalVisible: true,
    })
  };

  handleEdit = (editCard) =>{
    //need to also send teh deck to get the updated list
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

  hideModal = () =>{
    this.setState({
      modalVisible: false,
    })
  }

  render(props) {
    console.log("in list item", this.props);
    return <TouchableWithoutFeedback onPress={this.handlePress}>
        <View>
          <Card>
            <CardItem>
              <Text style={styles.textStyle}>{this.props.card.prompt}</Text>
            </CardItem>
          </Card>
          <EditCardModal 
            modalVisible={this.state.modalVisible} 
            card={this.props.card}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            hideModal={this.hideModal}
            />
        </View>
      </TouchableWithoutFeedback>;
  }
}

const styles = {
  textStyle: {
    fontSize: 24
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(CardListItem);
