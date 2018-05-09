import React, { Component } from "react";
import { Modal } from "react-native";
import {
  View,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Icon
} from "native-base";
import {buttonContainerStyle, viewStyle, cardItemStyle, center, iconStyle, buttonTextStyle} from '../styles/styles';

class EditDeleteDeckModal extends Component {
  state = {
    deck_name: '',
    id: '',
    user_id: '',
  };

    //refreshes state each time the componenet gets new props
  static getDerivedStateFromProps(nextProps, prevState){
      const { deck_name, id, user_id} = nextProps.deck;
      
      return {deck_name, id, user_id}
  }



  render() {
    return <Modal animationType="none" transparent={true} visible={this.props.modalVisible} onRequestClose={() => {
          console.log("modal closed");
        }}>
        <View style={viewStyle}>
          <View>
            <Card>
              <CardItem style={cardItemStyle}>
                <Form>
                  <Item floatingLabel style={{ width: 300 }}>
                    <Label>Deck Name</Label>
                    <Input value={this.state.deck_name} style={center} autoCapitalize={"none"} onChangeText={deck_name => this.setState(
                          { deck_name }
                        )} label={"Deck Name"} />
                  </Item>

                  <View style={buttonContainerStyle}>
                    <Button style={center} transparent onPress={() => this.props.handleDelete(this.state)}>
                      <Icon name="ios-trash-outline" style={iconStyle} />
                    </Button>

                    <Button style={center} transparent onPress={() => this.props.hideModal()}>
                      <Icon name="ios-close-circle-outline" style={iconStyle} />
                    </Button>

                    <Button style={center} transparent onPress={() => this.props.handleEdit(this.state)}>
                      <Text style={buttonTextStyle}>Edit</Text>
                    </Button>
                  </View>
                </Form>
              </CardItem>
            </Card>
          </View>
        </View>
      </Modal>;
  }
}

export default EditDeleteDeckModal;
