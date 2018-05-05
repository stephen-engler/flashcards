import React from 'react';
import {text} from 'react-native';

export const AppText =(props)=>{
    return (
        <Text style={{ fontSize: 30}}>
            {props.children}
        </Text> 
    )
}