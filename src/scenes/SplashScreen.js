import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import theme from "../colorTheme";
import SCREENS from "../navigatorMap";

import { logout } from "../store/actions/auth.action";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
};

function SplashScreen(props) {
  useEffect(() => {
    let routeToNavigate = "";
    if (props.auth.logged && props.auth.rememberSesion) {
      routeToNavigate = SCREENS.HOME;
    } else {
      props.logout();
      routeToNavigate = SCREENS.LANDING;
    }
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: routeToNavigate })]
      })
    );
  }, []);
  return <View style={{ flex: 1, backgroundColor: theme.dark }} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
