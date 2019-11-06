import React, { useState, useEffect } from "react";
import { Image, TextInput, Animated } from "react-native";
import styled from "styled-components";

import Title from "../text/Title";
import theme from "../../colorTheme";

const ORIGINAL_COLOR = theme.light;
const SUCCESS_COLOR = theme.green;
const FAILED_COLOR = theme.gray;
const ORIGINAL_VALUE = 0;
const SUCCESS_VALUE = 1;

const InputContainer = styled.View`
  height: 80;
  width: 100%;
  justify-content: center;
`;

export default function Input({
  value,
  textAlign,
  onChangeText,
  secureTextEntry = false,
  errorMessage,
  ...restProps
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

  let borderBottomColor = errorMessage
    ? FAILED_COLOR
    : interpolatedColor.interpolate({
        inputRange: [ORIGINAL_VALUE, SUCCESS_VALUE],
        outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR]
      });

  return (
    <InputContainer>
      <TextInput
        style={{
          height: 40,
          width: "100%",
          color: theme.light,
          textDecorationLine: "none",
          textAlign: textAlign || "left",
          backgroundColor: theme.lowDark
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...restProps}
      />
      <Animated.View
        style={{
          width: "100%",
          height: 1,
          borderBottomWidth: 1,
          borderBottomColor
        }}
      />
      <Title size="tiny" color={theme.gray} style={{ alignSelf: "flex-start" }}>
        {errorMessage}
      </Title>
    </InputContainer>
  );
}
