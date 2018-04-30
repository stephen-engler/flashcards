import { StackNavigator } from "react-navigation";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import SignInScreen from '../components/SignInScreen/SignInScreen';
import StudyScreen from '../components/StudyScreen/StudyScreen';
import StartScreen from '../components/StartScreen/StartScreen';

//Sets up the roots for the navigation
//since wraps the entire app these routes are available globally
const RootStack = StackNavigator({
  Start: {
    screen: StartScreen
  },
  Study: {
    screen: StudyScreen
  },
  Login: {
    screen: LoginScreen
  },
  SignIn: {
    screen: SignInScreen
  },
  initialRoute: "Start"
});

export default RootStack;
