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

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login",
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
    error: "",
    loading: false
  };
  //dispatches to user.saga the email and password which sends the axios call
  handleButtonPress = () => {
    this.setState({ error: "", loading: true });
    const { email, password } = this.state;
    this.props.dispatch({
      type: "LOGIN_USER",
      payload: { username: email, password: password }
    });
  };
  //Sets redux store userInfoReducer.view to the view to change to
  handleRegisterPress = () => {
    this.props.dispatch({
      type: "SET_VIEW",
      payload: "SignIn"
    });
  };
  //Sets state for error message
  onLoginFail = () => {
    this.setState({
      error: "Please Enter a valid Email and Password",
      loading: false
    });
  };

  //Shows the button if not loading, hides the button and shows a spinner if loading
  renderButton = () => {
    if (this.state.loading) {
      return <Spinner color="red" />;
    }

    return (
      <View style={styles.buttonStyle}>
        <Button
          large
          onPress={this.handleButtonPress}
          style={{ alignSelf: "center" }}
        >
          <Text>Login</Text>
        </Button>
      </View>
    );
  };

  //each time the redux store is changed this function is called
  //if the state of the userInfoReducer.view changes, navigates to the correct view
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    if (nextProps.state.userInfo.view === "Study") {
      nextProps.navigation.navigate("Study");
    } else if (nextProps.state.userInfo.view === "SignIn") {
      nextProps.navigation.navigate("SignIn");
    }
    return null;
  }

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
        </Form>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButton()}
        <View style={styles.registerStyle}>
          <Text>Don't have an accout?</Text>
          <Button
            style={{ alignSelf: "center" }}
            onPress={this.handleRegisterPress}
          >
            <Text>Register</Text>
          </Button>
        </View>
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
  },
  registerStyle: {
    flex: 1,
    alignItems: "center"
  }
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(LoginScreen);
