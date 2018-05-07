import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import {Text} from 'native-base';


const StartButton = (props)=>{
    return <TouchableHighlight onPress={props.handlePress} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fafafa" }}>
          <Text style={{ fontSize: 40, color: "#ffc107" }}>Start</Text>
        </View>
      </TouchableHighlight>;
}

export default StartButton;