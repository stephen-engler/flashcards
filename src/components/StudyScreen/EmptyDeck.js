import React from 'react';
import {
  Button,
  View,
  Text,
} from "native-base";
import {buttonTextStyle} from '../styles/styles';

//stateless comp expects correct, incorrect values
// and goBack / goHome functions
const EmptyDeck = (props)=>{
    return <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", alignSelf: "center", paddingTop: 150 }}>
        <View style={{ height: 100, width: 300, paddingTop: 20, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>
            You got {props.correct} right!
          </Text>
          <Text>And {props.incorrect} wrong</Text>
        </View>
        <View style={{ width: 300, height: 200, alignSelf: "center", alignItems: "center", justifyContent: "space-around", flex: 1, flexDirection: "row", paddingTop: 15 }}>
          {/* Go Back Button */}
          <Button transparent onPress={props.goBack}>
            <Text style={buttonTextStyle}>View Deck</Text>
          </Button>
          {/* Go Home button */}
          <Button transparent onPress={props.goHome}>
            <Text style={buttonTextStyle}>Go home</Text>
          </Button>
        </View>
      </View>;
}

export default EmptyDeck;