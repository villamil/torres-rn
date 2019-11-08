import React from "react";
import { CheckBoxContainer, CheckBoxBorder } from "./styles";

export default function CheckBox({ checked, onPress, backgroundColor }) {
  return (
    <CheckBoxContainer onPress={onPress} backgroundColor={backgroundColor}>
      <CheckBoxBorder checked={checked} backgroundColor={backgroundColor} />
    </CheckBoxContainer>
  );
}
