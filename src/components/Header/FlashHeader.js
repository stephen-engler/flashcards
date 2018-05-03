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


const FlashHeader =(props)=>{
    const {headerStyle, iconStyle, headerTextStyle} = styles;
    return (
    <Header style={headerStyle}>
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


const styles = {
  headerStyle: {
    backgroundColor: "#ff5722"
  },
  headerTextStyle: {
    color: "black",
    fontSize: 40,
    fontWeight: "500",
    textShadowOffset: {
      width: 0,
      height: 2
    },
    textShadowRadius: 1,
    textShadowColor: "#26a69a"
  },
  iconStyle: {
    color: "#26a69a",
    fontSize: 40,
  }
};

export default FlashHeader;