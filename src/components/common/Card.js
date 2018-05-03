import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 40, //rounded edges
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#ff8a50",
    shadowOffset: { width: 0, height: 2 }, //no shadows on side
    shadowOpacity: 0.3,
    shadowRadius: 2, //round corners for corners
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export {Card};