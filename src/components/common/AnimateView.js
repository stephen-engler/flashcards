import React from 'react';
import * as Animatable from "react-native-animatable";
import { View } from "react-native";

const AnimateView = (props)=>{
    return <Animatable.View animation="fadeInRight" duration={1000} style={{ flex: 1 }} >
                {props.children}
            </Animatable.View>;
}

export default AnimateView;