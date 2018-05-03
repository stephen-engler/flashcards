import React, {Component} from 'react';
import {
    View,
    Text,
    Form,
    Item,
    Input,
    Label,
    Button,
    Textarea,
    Card,
    CardItem
} from 'native-base'
import {Modal} from 'react-native';


class AddCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        prompt: '',
        answer: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return {prompt:'', answer:''}
  }


  render() {
    return <Modal animationType="none" transparent={true} visible={this.props.modalVisible} onRequestClose={() => {
          console.log("modal closed");
        }}>
        <View style={{ marginTop: 100, paddingRight: 10, paddingLeft: 10, flex: 1 }}>
          <View>
            <Card>
              <CardItem style={{ height: 300, backgroundColor: "yellow" }}>
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
                    <Button 
                      style={{ alignSelf: "center" }} 
                      onPress={() => this.props.handleSubmit(this.state)}>
                      <Text>Submit</Text>
                    </Button>
                    <Button 
                      style={{ alignSelf: "center" }} 
                      onPress={() => this.props.hideModal()}>
                      <Text>Cancel</Text>
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

export default AddCardModal;