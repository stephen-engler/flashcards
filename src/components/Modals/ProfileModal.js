import React, { Component } from "react";
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
} from "native-base";
import { Modal } from "react-native";
import {viewStyle, buttonContainerStyle, cardItemStyle, center} from '../styles/styles';

const ProfileModal =(props)=> {


    return <Modal animationType="none" transparent={true} visible={props.modalVisible} onRequestClose={() => {
          console.log("modal closed");
        }}>
        <View style={viewStyle}>
          <View>
            <Card>
              <CardItem style={cardItemStyle}>
                <Form>
                  <View style={buttonContainerStyle}>
                    <Button style={center} onPress={() => props.hideModal()}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button style={center} onPress={() => props.handleLogout()}>
                      <Text>Logout</Text>
                    </Button>
                  </View>
                </Form>
              </CardItem>
            </Card>
          </View>
        </View>
      </Modal>;
  }


export default ProfileModal;
