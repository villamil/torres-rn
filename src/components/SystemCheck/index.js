import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { SERVER_URI, SERVER_PORT } from "react-native-dotenv";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  systemUpdateInternetStatus,
  systemUpdateServerStatus
} from "../../store/actions/system";

const mapStateToProps = ({ systemReducer }) => {
  return {
    system: systemReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      systemUpdateInternetStatus,
      systemUpdateServerStatus
    },
    dispatch
  );
};

function SystemCheck({
  system,
  systemUpdateInternetStatus,
  systemUpdateServerStatus
}) {
  const [ws, setWS] = useState();
  useEffect(() => {
    const retryServerConnection = setInterval(() => {
      if (!system.hasAccessToServer) {
        checkServerConnection();
      }
    }, 1000 * 5);
    const unsubscribe = NetInfo.addEventListener(state => {
      systemUpdateInternetStatus(state.isConnected);
      if (state.isConnected) {
        checkServerConnection();
      }
    });
    return function cleanup() {
      systemUpdateInternetStatus(false);
      unsubscribe();
      clearInterval(retryServerConnection);
      if (ws) {
        systemUpdateServerStatus(false);
        ws.close();
      }
    };
  }, []);

  function checkServerConnection() {
    const newWS = new WebSocket(`ws://${SERVER_URI}:${SERVER_PORT}/status`);
    setWS(newWS);
  }

  if (ws) {
    ws.onopen = () => {
      systemUpdateServerStatus(true);
    };
    ws.onerror = e => {
      systemUpdateServerStatus(false);
    };
    ws.onclose = () => {
      systemUpdateServerStatus(false);
    };
  }

  return null;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemCheck);
