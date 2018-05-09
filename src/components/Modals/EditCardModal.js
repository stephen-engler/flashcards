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
  Textarea,
  Icon
} from "native-base";
import { Modal } from "react-native";
import {viewStyle, buttonContainerStyle, cardItemStyle, center, iconStyle, buttonTextStyle} from '../styles/styles'

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
        <Button large transparent style={{marginTop: 10, right: 1}} onPress={()=>this.props.hideModal()}>
          <Icon name="arrow-back" style={iconStyle} />
        </Button>
        <View style={viewStyle}>
          <View>
            <Card>
              <CardItem style={cardItemStyle}>
                <Form>
                  <Item floatingLabel style={{ width: 300 }}>
                    <Label>Prompt</Label>
                    <Input value={this.state.prompt} style={center} autoCapitalize={"none"} onChangeText={prompt => this.setState(
                          { prompt }
                        )} label={"Prompt"} />
                  </Item>
                  <Item style={{ width: 300 }}>
                    <Textarea rowSpan={5} bordered placeholder="Answer" value={this.state.answer} style={center} autoCapitalize={"none"} style={{ width: 300 }} onChangeText={answer => this.setState(
                          { answer }
                        )} />
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

export default EditCardModal;
