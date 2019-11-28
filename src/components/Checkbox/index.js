import React from "react";
import { CheckBoxContainer, CheckBoxBorder } from "./styles";

export default function CheckBox({ checked, onPress, ...restProps }) {
  return (
    <CheckBoxContainer onPress={onPress} {...restProps}>
      <CheckBoxBorder checked={checked} {...restProps} />
    </CheckBoxContainer>
  );
}
