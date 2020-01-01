import React from "react";
import { CheckBoxContainer, CheckBoxBorder } from "./styles";

export default function CheckBox({ checked, onPress, testID, ...restProps }) {
  return (
    <CheckBoxContainer onPress={onPress} testID={testID} {...restProps}>
      <CheckBoxBorder checked={checked} {...restProps} />
    </CheckBoxContainer>
  );
}
