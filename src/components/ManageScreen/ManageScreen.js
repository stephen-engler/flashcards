import React, { Component } from "react";
import {push} from 'react-router-redux';
import { Icon } from 'react-native-elements';
import { Platform, StyleSheet, LayoutAnimation, TouchableHighlight } from "react-native";
import {
  Button,
  Container,
  Form,
  Item,
  Content,
  View,
  Header,
  Card,
  CardItem,
  Title,
  Left,
  Label,
  Input,
  Right,
  Text,
  Body,
  List,
  ListItem,
} from "native-base";
import DeckList from './DeckList';
import {Modal} from 'react-native'
import { connect } from "react-redux";



class ManageScreen extends Component {
  state = {
    modalVisible: false,
    deck_name: ''
  };

  componentDidMount() {
    this.props.dispatch({
      type: "GET_USER_DECKS"
    });
  }

  handlePress=()=>{
    this.props.dispatch({
      type: 'ADD_DECK_NAME',
      payload: this.state.deck_name,
    })
    this.setState({
      modalVisible: false,
      deck_name: ''
    })
  }

  render() {
    
    return <Container>
        <Header style={styles.headerStyle}>
          <Left>
            <Button transparent>
              <Text>Back</Text>
            </Button>
          </Left>

          <Body>
            <Text style={styles.headerTextStyle}>Decks</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.setState({
                  modalVisible: true
                })}>
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <DeckList />
        </Content>

        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => {
            console.log("modal closed");
          }}>
          <View style={{ marginTop: 100, paddingRight: 10, paddingLeft: 10, flex: 1 }}>
            <View>
              <Card style={{ elevation: 3, height: 300, shadowColor: "red" }}>
                <CardItem style={{ height: 300 }}>
                  <Form>
                    <Item floatingLabel style={{width: 300}}>
                      <Label>Deck Name</Label>
                      <Input 
                        value={this.state.deck_name} 
                        style={{alignSelf:'center'}}
                        autoCapitalize={"none"} 
                        onChangeText={deck_name => this.setState(
                            { deck_name }
                          )} 
                        label={"Deck Name"} 
                      />
                    </Item>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Button style={{alignSelf: 'center'}} onPress={this.handlePress}>
                        <Text>Submit</Text>
                      </Button>
                    </View>
                  </Form>
                </CardItem>
              </Card>
            </View>
          </View>
        </Modal>
      </Container>;
  }
}

const styles = {
  headerStyle: {
    backgroundColor: "orange"
  },
  headerTextStyle: {
    color: "white",
    fontSize: 45,
    fontWeight: "500",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowRadius: 1,
    textShadowColor: "#000"
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(ManageScreen);
