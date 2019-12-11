import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  systemUpdateInternetStatus,
  systemUpdateServerStatus
} from "../../store/actions/system";
import { wsConnect } from "../../store/actions/websocket.actions";

const mapStateToProps = ({ system }) => {
  return {
    system
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      systemUpdateInternetStatus,
      systemUpdateServerStatus,
      wsConnect
    },
    dispatch
  );
};

function SystemCheck({ system, systemUpdateInternetStatus, wsConnect }) {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      systemUpdateInternetStatus(state.isConnected);
    });
    return function cleanup() {
      systemUpdateInternetStatus(false);
      unsubscribe();
    };
  }, []);
  // useEffect(() => {
  //   const retryServerConnection = setInterval(() => {
  //     console.log(system.hasAccessToServer);
  //     if (!system.hasAccessToServer) {
  //       wsConnect(`ws://${SERVER_URI}:${SERVER_PORT}/status`);
  //     }
  //   }, 1000 * 5);
  //   return function cleanup() {
  //     clearInterval(retryServerConnection);
  //   };
  // }, []);

  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemCheck);
