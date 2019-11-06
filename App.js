import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from "react-native";

import LandingScreen from "./src/scenes/Landing";
import SignUpScreen from "./src/scenes/SignUp";
import SignInScreen from "./src/scenes/SignIn";
import HomeScreen from "./src/scenes/Home";
import CodeScreen from "./src/scenes/Code";

const MainNavigator = createStackNavigator(
  {
    Landing: { screen: LandingScreen },
    SignUp: { screen: SignUpScreen },
    SignIn: { screen: SignInScreen },
    Home: { screen: HomeScreen },
    Code: { screen: CodeScreen }
  },
  {
    headerMode: "none"
  }
);

const AppContent = createAppContainer(MainNavigator);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#12151A" barStyle="light-content" />
      <AppContent />
    </>
  );
};

export default App;
