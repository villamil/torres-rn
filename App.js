import React, { useEffect, useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StatusBar, View } from "react-native";

import LandingScreen from "./src/scenes/Landing";
import SignUpScreen from "./src/scenes/SignUp";
import SignInScreen from "./src/scenes/SignIn";
import HomeScreen from "./src/scenes/Home";
import CodeScreen from "./src/scenes/Code";
import InviteScreen from "./src/scenes/Invite";

import theme from "./src/colorTheme";

import RulesScreen from "./src/containers/Rules";
import Menu from "./src/containers/Menu";

const MainStack = createStackNavigator(
  {
    Landing: { screen: LandingScreen },
    SignUp: { screen: SignUpScreen },
    SignIn: { screen: SignInScreen },
    Home: { screen: HomeScreen },
    Code: { screen: CodeScreen },
    Invite: { screen: InviteScreen }
  },
  {
    headerMode: "none"
  }
);

const MenuNavigator = createDrawerNavigator(
  {
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
  },
  {
    contentComponent: Menu
  }
);

const AppContent = createAppContainer(MenuNavigator);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.dark} barStyle="light-content" />
      <AppContent />
    </View>
  );
};

export default App;
