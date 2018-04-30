import { StackNavigator } from "react-navigation";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import SignInScreen from '../components/SignInScreen/SignInScreen';
import StudyScreen from '../components/StudyScreen/StudyScreen';
import StartScreen from '../components/StartScreen/StartScreen';
import ManageScreen from '../components/ManageScreen/ManageScreen';

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
  Manage: {
    screen: ManageScreen
  },
  initialRoute: "Start"
});

export default RootStack;
