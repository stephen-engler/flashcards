import React, { Component } from "react";
import {
  View,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";
import { Modal } from "react-native";

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: this.props.card.prompt,
      answer: this.props.card.answer,
      id: this.props.card.id
    };
  }

  handleEditAndClear = () => {
      this.props.handleEdit(this.state)
      this.setState({
        prompt: '',
        answer: '',
        id: '',
      })
  };
  handleDeleteAndClear = () =>{
    this.props.handleDelete(this.state)
    this.setState({ 
      prompt: "", 
      answer: "", 
      id: "" 
      });
  }

  handleCancelAndClear = () =>{
    this.props.handleCancel();
    this.setState({
      prompt: '',
      answer: '',
      id: '',
    })
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
                    <Label>Prompt</Label>
                    <Input value={this.state.prompt} style={{ alignSelf: "center" }} autoCapitalize={"none"} onChangeText={prompt => this.setState(
                          { prompt }
                        )} label={"Prompt"} />
                  </Item>
                  <Item floatingLabel style={{ width: 300 }}>
                    <Label>Answer</Label>
                    <Input value={this.state.answer} style={{ alignSelf: "center" }} autoCapitalize={"none"} onChangeText={answer => this.setState(
                          { answer }
                        )} label={"Answer"} />
                  </Item>
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Button style={{ alignSelf: "center" }} onPress={this.handleEditAndClear}>
                      <Text>Edit</Text>
                    </Button>
                    <Button onPress = {this.handleCancelAndClear}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button onPress = {this.handleDeleteAndClear}>
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

export default EditCardModal;
