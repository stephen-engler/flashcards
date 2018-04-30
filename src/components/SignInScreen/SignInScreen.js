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
import axios from "axios";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};

class SignInScreen extends Component {
  static navigationOptions = {
    title: "Sign in",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false
  };

  handleButtonPress = () => {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ error: "", loading: true });
      const { email, password } = this.state;
      axios
        .post(
          "http://localhost:5000/api/user/register",
          { username: email, password: password },
          config
        )
        .then(response => {
          console.log("response from button press ", response);
          this.props.navigation.navigate("Login");
        })
        .catch(error => {
          console.log("an error in handle button press ", error);
        });
    } else {
      this.passwordsDontMatch();
    }
  };

  onLoginFail = () => {
    this.setState({
      error: "Authentication fail",
      loading: false
    });
  };
  passwordsDontMatch = () => {
    this.setState({
      error: `Passwords don't match`,
      password: "",
      confirmPassword: ""
    });
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <View style={styles.buttonStyle}>
        <Button
          large
          onPress={this.handleButtonPress}
          style={{ alignSelf: "center" }}
        >
          <Text>Sign up</Text>
        </Button>
      </View>
    );
  };

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

export default SignInScreen;
