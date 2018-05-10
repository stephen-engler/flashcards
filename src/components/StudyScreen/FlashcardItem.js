import React, { Component } from "react";

//Components
import {
  Card,
  CardItem,
  Text,
  Icon,
} from "native-base";
import FlipCard from 'react-native-flip-card'
import {View} from 'react-native';
//Styles
import {flashCardItemStyle, flashCardTextStyle, flashCardStyle, flashCardBackStyle} from '../styles/styles'

class FlashcardItem extends Component {

  renderColorBar=()=>{
    if(this.props.userSwipingDirection=="right"){
      return <View style={styles.iconViewStyle}>
          <Icon name="ios-checkmark" style={{ color: "#4caf50", fontSize: 60 }} />
        </View>;
    }
    else if(this.props.userSwipingDirection=='left'){
      return <View style={styles.iconViewStyle}>
          <Icon name="ios-close-outline" style={{ color: "#c62828", fontSize: 60 }} />
        </View>;
    }
    else {
      return <View style={styles.iconViewStyle}>
          <Text></Text>
        </View>;
    }
  }
  render() {
    const { item } = this.props;
    //flip card animates between showing the first card
    //and the second card on touch
    //Had to change the source code in the flipcard style file
    //There was a black border and it was the only way to remove it
    return (
      <FlipCard>
        {/* Prompt card */}
        <Card style={flashCardStyle}>
          {this.renderColorBar()}
          <CardItem style={flashCardItemStyle}>
            <Text style={flashCardTextStyle}>{item.prompt}</Text>
          </CardItem>
        </Card>
        {/* Answer Card */}
        <Card style={flashCardBackStyle}>
          {this.renderColorBar()}
          <CardItem style={flashCardItemStyle}>
            <Text style={flashCardTextStyle}>{item.answer}</Text>
          </CardItem>
        </Card>
      </FlipCard>
    );
  }
}

const styles={
  iconViewStyle:{ justifyContent: "center", alignItems: "center", height: 50 }

  
}

export default FlashcardItem;