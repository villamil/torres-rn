import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

import theme from "../colorTheme";
import SCREENS from "../navigatorMap";

function SplashScreen(props) {
  useEffect(() => {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: SCREENS.LANDING })]
      })
    );
  }, []);
  return <View style={{ flex: 1, backgroundColor: theme.dark }} />;
}

export default SplashScreen;
