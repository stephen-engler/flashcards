import React from 'react';
import { View } from 'react-native';
import {cardContainerStyle} from '../styles/styles'

const Card = (props) => {
    return (
        <View style={cardContainerStyle}>
            {props.children}
        </View>
    )
}


export {Card};