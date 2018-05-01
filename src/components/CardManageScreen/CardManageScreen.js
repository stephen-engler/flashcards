import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  LayoutAnimation,
  TouchableHighlight
} from "react-native";
import {
  Button,
  Footer,
  FooterTab,
  Container,
  Content,
  View,
  Header,
  Title,
  Left,
  Right,
  Icon,
  Text,
  Body,
  List,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import CardList from './CardList';

class CardManageScreen extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  handlePress=()=>{
    this.props.dispatch(push("/study"));
  }

  render() {
    return <Container>
        <Header>
          <Body>
            <Text>{this.props.state.cardList.deck.deck_name}</Text>
          </Body>
        </Header>
        <Content>
          <CardList />
        </Content>
        <Footer>
          <FooterTab>
            <Button full primary onPress={this.handlePress}>
              <Text style={styles.buttonStyle}>Start</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>;
  }
}

const styles = {
  buttonStyle:{
    fontSize: 20,
    color: "white"
  }
}

const mapStateToProps=(state)=>({
    state
})

export default connect(mapStateToProps)(CardManageScreen);