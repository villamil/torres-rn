import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StatusBar } from "react-native";

import LandingScreen from "./src/scenes/Landing";
import SignUpScreen from "./src/scenes/SignUp";
import SignInScreen from "./src/scenes/SignIn";
import HomeScreen from "./src/scenes/Home";
import CodeScreen from "./src/scenes/Code";

import RulesScreen from "./src/containers/Rules";

const MainStack = createStackNavigator(
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

const MenuNavigator = createDrawerNavigator({
  MainStack: {
    screen: MainStack,
    navigationOptions: ({ navigation }) => {
      let drawerLockMode = "locked-closed";
      const hasHome = navigation.state.routes.find(
        route => route.routeName === "Home"
      );

      if (hasHome) {
        drawerLockMode = "unlocked";
      }

      return { drawerLockMode };
    }
  },
  RulesScreen: {
    screen: RulesScreen
  }
});

const AppContent = createAppContainer(MenuNavigator);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#12151A" barStyle="light-content" />
      <AppContent />
    </>
  );
};

export default App;
