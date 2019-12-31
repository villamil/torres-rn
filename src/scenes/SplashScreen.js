import React, { useEffect } from "react";
import { View, Linking } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import queryString from "query-string";

import theme from "../colorTheme";
import SCREENS from "../navigatorMap";

import { logout } from "../store/actions/auth.action";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
};

function SplashScreen(props) {
  function Navigate(route, params = {}) {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: route, params })]
      })
    );
  }

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        const params = queryString.parse(url.replace("app://torres?", ""));
        if (props.auth.logged && props.auth.rememberSesion) {
          Navigate(SCREENS.HOME, { code: params.code });
        } else {
          Navigate(SCREENS.SIGN_UP, { code: params.code });
        }
      } else {
        let routeToNavigate = "";
        if (props.auth.logged && props.auth.rememberSesion) {
          routeToNavigate = SCREENS.HOME;
        } else {
          props.logout();
          routeToNavigate = SCREENS.LANDING;
        }
        Navigate(routeToNavigate);
      }
    });
  }, []);

  return <View style={{ flex: 1, backgroundColor: theme.dark }} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
