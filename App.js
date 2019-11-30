import React, { useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StatusBar, View, Button } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";

import { store, persistor } from "./src/store";

import LandingScreen from "./src/scenes/Landing";
import SignUpScreen from "./src/scenes/SignUp";
import SignInScreen from "./src/scenes/SignIn";
import HomeScreen from "./src/scenes/Home";
import CodeScreen from "./src/scenes/Code";
import InviteScreen from "./src/scenes/Invite";
import UsersScreen from "./src/scenes/Users";
import FilterScreen from "./src/scenes/Filter";
import DetailsScreen from "./src/scenes/Details";
import MaintenanceOwedScreen from "./src/scenes/MaintenanceOwed";
import SplashScreenComponent from "./src/scenes/SplashScreen";

import SystemCheck from "./src/components/SystemCheck";

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
    Invite: { screen: InviteScreen },
    Users: { screen: UsersScreen },
    Filter: { screen: FilterScreen },
    Details: { screen: DetailsScreen },
    MaintenanceOwed: { screen: MaintenanceOwedScreen }
  },
  {
    headerMode: "none"
  }
);

const MenuNavigator = createDrawerNavigator(
  {
    SplashScreen: { screen: SplashScreenComponent },
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
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SystemCheck />
        <View style={{ flex: 1, backgroundColor: theme.dark }}>
          <StatusBar backgroundColor={theme.dark} barStyle="light-content" />
          <AppContent />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
