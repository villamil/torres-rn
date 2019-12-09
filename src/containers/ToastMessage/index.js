import React, { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { connect } from "react-redux";

const mapStateToProps = ({ toast }) => ({ toast });

function ToastMessage(props) {
  useEffect(() => {
    if (props.toast.show) {
      ToastAndroid.show(props.toast.message, ToastAndroid.SHORT);
    }
  }, [props.toast]);
  return null;
}

export default connect(mapStateToProps)(ToastMessage);
