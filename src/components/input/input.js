import React, { useState, useEffect } from "react";
import { Image, TextInput, Animated } from "react-native";

import theme from "../../colorTheme";

const ORIGINAL_COLOR = theme.light;
const SUCCESS_COLOR = theme.green;
const ORIGINAL_VALUE = 0;
const SUCCESS_VALUE = 1;

export default function Input({
  value,
  textAlign,
  onChangeText,
  secureTextEntry = false
}) {
  const [interpolatedColor, setInterpolatedColor] = useState(
    new Animated.Value(ORIGINAL_VALUE)
  );

  function onFocus() {
    Animated.timing(interpolatedColor, {
      duration: 300,
      toValue: SUCCESS_VALUE
    }).start();
  }

  function onBlur() {
    Animated.timing(interpolatedColor, {
      duration: 300,
      toValue: ORIGINAL_VALUE
    }).start();
  }

  let borderBottomColor = interpolatedColor.interpolate({
    inputRange: [ORIGINAL_VALUE, SUCCESS_VALUE],
    outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR]
  });

  return (
    <>
      <TextInput
        style={{
          height: 40,
          width: "100%",
          color: theme.light,
          textDecorationLine: "none",
          textAlign: textAlign || "left"
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Animated.View
        style={{
          width: "100%",
          height: 10,
          borderBottomWidth: 1,
          borderBottomColor
        }}
      />
    </>
  );
}
