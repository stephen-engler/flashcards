import React from 'react';
import { Text, View } from 'react-native'

const CardItem = (props) =>{
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
}

export {CardItem};