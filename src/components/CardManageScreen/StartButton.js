//React
import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import {Text} from 'native-base';

//Stateless component expects function to call when pressed
//props.handlePress
const StartButton = (props)=>{
    return <TouchableHighlight 
      onPress={props.handlePress} 
      style={{ flex: 1 }}>
        <View style={styles.startButtonStyle}>
          <Text style={styles.startButtonTextStyle}>Start</Text>
        </View>
      </TouchableHighlight>;
}

const styles = {
  startButtonStyle:{ 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#fafafa" 
    }, 
startButtonTextStyle:{ fontSize: 40, color: "#ffc107" }
}

export default StartButton;