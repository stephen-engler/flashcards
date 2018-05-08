//react
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
//Styles
import {headerBackgroundColor, headerTextStyle, iconStyle} from '../styles/styles'

//Stateless component
//props functions = showProfileModal goBack showModal goHome
//title = string
//add = boolean shows add button if true
//profile = boolean shows profile icon if true
const FlashHeader =(props)=>{

    return <Header style={headerBackgroundColor}>
        <Left>
          {/* if profile is true, profile icon is shown */}
          {props.profile ? <Button transparent large onPress={() => props.showProfileModal()}>
              <Icon name="ios-information-circle-outline" style={iconStyle} />
            </Button> : <Button transparent  large onPress={() => props.goBack()}>
              <Icon name="arrow-back" style={iconStyle} />
            </Button>}
        </Left>
        {/* title */}
        <Body>
          <Text style={headerTextStyle}>{props.title}</Text>
        </Body>
        {/* Right icons, if props.add is true, add icon is shown */}
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