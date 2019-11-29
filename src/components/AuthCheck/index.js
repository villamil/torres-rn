import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SCREENS from "../../navigatorMap";

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

function AuthCheck({ auth, navigation }) {
  useEffect(() => {
    if (auth.logged && auth.rememberSesion) {
      navigation.navigate(SCREENS.HOME);
    }
  }, [auth]);

  return null;
}

export default connect(mapStateToProps, null)(AuthCheck);
