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
  Text
} from "native-base";

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
        <View style={{ marginTop: 100, paddingRight: 10, paddingLeft: 10, flex: 1 }}>
          <View>
            <Card style={{ elevation: 3, height: 300, shadowColor: "red" }}>
              <CardItem style={{ height: 300 }}>
                <Form>
                  <Item floatingLabel style={{ width: 300 }}>
                    <Label>Deck Name</Label>
                    <Input value={this.state.deck_name} style={{ alignSelf: "center" }} autoCapitalize={"none"} onChangeText={deck_name => this.setState(
                          { deck_name }
                        )} label={"Deck Name"} />
                  </Item>
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Button style={{ alignSelf: "center" }} onPress={()=>this.props.handleEdit(this.state)}>
                      <Text>Edit</Text>
                    </Button>
                    <Button style={{ alignSelf: "center" }} onPress={()=>this.props.hideModal()}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button style={{ alignSelf: "center" }} onPress={()=>this.props.handleDelete(this.state)}>
                      <Text>Delete</Text>
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
