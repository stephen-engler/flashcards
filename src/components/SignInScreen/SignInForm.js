import React, { Component } from "react";
import {
  Item,
  Content,
  Form,
  Input,
  Label,
  Button,
  Text,
  Spinner
} from "native-base";
import { View } from "react-native";
import { connect } from "react-redux";


class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false
  };
  //handles the register button press
  handleButtonPress = () => {
    //checks if passwords match
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ error: "", loading: true });
      const { email, password } = this.state;
      //sends dispatch to saga to register user
      //expects username and password object
      this.props.dispatch({
        type: "REGISTER_USER",
        payload: { username: email, password: password }
      });
    } else {
      this.passwordsDontMatch();
    }
  };
  //gives user message if login failed
  onLoginFail = () => {
    this.setState({
      error: "Authentication fail",
      loading: false
    });
  };
  //gives the user an error message, and clears password input
  passwordsDontMatch = () => {
    this.setState({
      error: `Passwords don't match`,
      password: "",
      confirmPassword: ""
    });
  };
  //if not loading, renders the button for signin
  //if loading, shows a loading spinner
  renderButton = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    return <View style={styles.buttonStyle}>
        <Button large transparent onPress={this.handleButtonPress} style={{ alignSelf: "center" }}>
          <Text style={{ color: "#ffc107", fontSize: 30 }}>
            Sign up
          </Text>
        </Button>
      </View>;
  };

  //render
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              value={this.state.email}
              autoCapitalize={"none"}
              onChangeText={email => this.setState({ email })}
              label={"Email"}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              label={"Password"}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input
              secureTextEntry
              value={this.state.confirmPassword}
              onChangeText={confirmPassword =>
                this.setState({ confirmPassword })
              }
              label={"confirm Password"}
            />
          </Item>
        </Form>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(SignInForm);
