import React from "react";
import { CheckBoxContainer, CheckBoxBorder } from "./styles";

export default function CheckBox({ checked, onPress }) {
  return (
    <CheckBoxContainer onPress={onPress}>
      <CheckBoxBorder checked={checked} />
    </CheckBoxContainer>
  );
}
