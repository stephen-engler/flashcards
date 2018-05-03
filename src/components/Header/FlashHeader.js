import React from 'react';
import {
    Header,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Button,
} from 'native-base';
import {headerBackgroundColor, headerTextStyle, iconStyle} from '../styles/styles'


const FlashHeader =(props)=>{

    return (
    <Header style={headerBackgroundColor}>
        <Left>
            {props.profile ?(
                <Button transparent onPress={()=>props.showProfileModal()}>
                    <Icon name ='person' style={iconStyle}/>
                </Button>
            ):(
            <Button transparent onPress={()=>props.goBack()}>
                <Icon name='arrow-back' style = {iconStyle}/>
            </Button>
            )}
        </Left>
        <Body>
            <Text style={headerTextStyle}>{props.title}</Text>
        </Body>
        <Right>
            { props.add ? (
                <Button transparent onPress={() => props.showModal()}>
                    <Icon name="add-circle" style={iconStyle}/>
                </Button> )  
            : (
                <Button transparent onPress={()=> props.goHome()}>
                    <Icon name='home' style={iconStyle}/>
                </Button>       
            )
            }
        </Right>
    </Header>
    );
}

export default FlashHeader;