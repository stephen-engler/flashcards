import React from 'react';
import { Text, View } from 'react-native'
import {cardItemContainerStyle} from '../styles/styles'

const CardItem = (props) =>{
    return (
        <View style={cardItemContainerStyle}>
            {props.children}
        </View>
    );
};


export {CardItem};