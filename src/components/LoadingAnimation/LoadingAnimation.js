import React from 'react';
import * as Animatable from "react-native-animatable";
import {View} from 'react-native';
import {Spinner} from 'native-base'
const LoadingAnimation = ()=>{
    return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animatable.Text 
            style={styles.flashStyle} 
            animation="swing" 
            duration={2000} 
            iterationCount={Infinity}>
          Flash
        </Animatable.Text>
        <Animatable.Text 
            style={styles.cardsStyle} 
            animation="tada" 
            duration={2000} 
            direction="alternate" 
            iterationCount={Infinity}>
          Cards
        </Animatable.Text>
        <Spinner color="red"/>
    </View>
    
    );
}
const styles = {
  flashStyle: {
    fontSize: 50,
    color: "red"
  },
  cardsStyle: {
    fontSize: 50,
    color: "orange"
  }
};

export default LoadingAnimation;
