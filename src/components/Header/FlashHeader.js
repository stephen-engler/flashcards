import React from 'react';
import {
    Header,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Button,
    View,
} from 'native-base';
import {headerBackgroundColor, headerTextStyle, iconStyle} from '../styles/styles'


const FlashHeader =(props)=>{

    return <Header style={headerBackgroundColor}>
        <Left>
          {props.profile ? <Button transparent large onPress={() => props.showProfileModal()}>
              <Icon name="ios-information-circle-outline" style={iconStyle} />
            </Button> : <Button transparent  large onPress={() => props.goBack()}>
              <Icon name="arrow-back" style={iconStyle} />
            </Button>}
        </Left>
        <Body>
          <Text style={headerTextStyle}>{props.title}</Text>
        </Body>
        <Right>
          {props.add ? <Button transparent large onPress={() => props.showModal()}>
              <Icon name="add-circle" style={iconStyle} />
            </Button> : <Button transparent large onPress={() => props.goHome()}>
              <Icon name="home" style={{ fontWeight: 900 }} style={iconStyle} />
            </Button>}
        </Right>
      </Header>;
}

export default FlashHeader;