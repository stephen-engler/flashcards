import React, {Component} from 'react';
import { Modal } from "react-native";
import {View, Card, CardItem, Form, Item, Label, Input, Button, Text} from 'native-base';
import {buttonContainerStyle, viewStyle, cardItemStyle, center } from '../styles/styles';

class AddDeckModal extends Component{
    state = {
        deck_name: ''
    }
    //resets state each time the modal recieves new props
    static getDerivedStateFromProps(nextProps, prevState){
        return {deck_name: ''}
    }

    handlePress=()=>{
        this.props.handleAddDeck(this.state.deck_name);
        this.setState({
            deck_name: '',
        })
    }

    render(){
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
                        <Button style={center} onPress={() => this.props.hideModal()}>
                          <Text>Cancel</Text>
                        </Button>
                        <Button style={center} onPress={this.handlePress}>
                          <Text>Submit</Text>
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

export default AddDeckModal;