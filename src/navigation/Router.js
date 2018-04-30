
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import LoginScreen from "../components/LoginScreen/LoginScreen";
import SignInScreen from '../components/SignInScreen/SignInScreen';
import StudyScreen from '../components/StudyScreen/StudyScreen';
import StartScreen from '../components/StartScreen/StartScreen';
import ManageScreen from '../components/ManageScreen/ManageScreen';

//Sets up the roots for the navigation
//since wraps the entire app these routes are available globally
export const Router = ()=>{
  return(
    <NativeRouter>
      <View>
      <Link to="/">
      </Link>
      <Route exact path="/" component ={StartScreen}/>
      <Route path="/login" component={LoginScreen}/>
      <Route path="/signin" component={SignInScreen}/>
      <Route path="/manage" component={ManageScreen}/>
      <Route path="/study" component={StudyScreen}/>
      </View>
    </NativeRouter>
  )
}


