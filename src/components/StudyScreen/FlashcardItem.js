import React, { Component } from "react";

//Components
import {
  Card,
  CardItem,
  Text,
} from "native-base";
import FlipCard from 'react-native-flip-card'
//Styles
import {flashCardItemStyle, flashCardTextStyle, flashCardStyle, flashCardBackStyle} from '../styles/styles'

class FlashcardItem extends Component{
    render(){
      const  {item} = this.props;
      //flip card animates between showing the first card
      //and the second card on touch
      //Had to change the source code in the flipcard style file
      //There was a black border and it was the only way to remove it
        return (
          <FlipCard>
              {/* Prompt card */}
            <Card style={flashCardStyle}>
              <CardItem style={flashCardItemStyle}>
                <Text style={flashCardTextStyle}>{item.prompt}</Text>
              </CardItem>
            </Card>
            {/* Answer Card */}
            <Card style={flashCardBackStyle}>
              <CardItem style={flashCardItemStyle}>
                <Text style={flashCardTextStyle}>{item.answer}</Text>
              </CardItem>
            </Card>
        </FlipCard>);
    }
}

export default FlashcardItem;