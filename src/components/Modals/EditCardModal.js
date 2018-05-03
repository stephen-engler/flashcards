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
  Button,
  Textarea
} from "native-base";
import { Modal } from "react-native";

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: '',
      answer: '',
      id: ''
    };
  }
  //makes sure state is reset each time the component
  //gets new props
  static getDerivedStateFromProps(nextProps, prevState){
    const {id, prompt, answer} = nextProps.card
    return {id, prompt, answer}
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
                  <Item style={{ width: 300 }}>
                    <Textarea rowSpan={5} bordered placeholder="Answer" value={this.state.answer} style={{ alignSelf: "center" }} autoCapitalize={"none"} style={{ width: 300 }} onChangeText={answer => this.setState(
                          { answer }
                        )} />
                  </Item>
                  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Button style={{ alignSelf: "center" }} onPress={() => this.props.handleEdit(this.state)}>
                      <Text>Edit</Text>
                    </Button>
                    <Button onPress={() => this.props.hideModal()}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button onPress={() => this.props.handleDelete(this.state)}>
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
