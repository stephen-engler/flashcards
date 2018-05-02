import React, { Component } from "react";
import { CardItem, Card } from "../common/";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import EditCardModal from './EditCardModal';
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
    this.setState({
      modalVisible: false
    })
    this.props.dispatch({
      type: 'EDIT_CARD',
      payload: editCard
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
