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
  CardItem, 
  Icon
} from "native-base";
import { Modal } from "react-native";
import {viewStyle, buttonContainerStyle, cardItemStyle, center, iconStyle, buttonTextStyle} from '../styles/styles';

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
                    <Button style={center} transparent onPress={() => props.hideModal()}>
                      <Icon name="ios-close-circle-outline" style={iconStyle} />
                    </Button>
                    <Button style={center} transparent onPress={() => props.handleLogout()}>
                      <Text style={buttonTextStyle}>Logout</Text>
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
