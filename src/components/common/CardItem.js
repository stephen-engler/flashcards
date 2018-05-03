import React from 'react';
import { Text, View } from 'react-native'

const CardItem = (props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 40,
    padding: 5,
    backgroundColor: "#64d8cb",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export {CardItem};