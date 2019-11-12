import React from "react";

import { CustomPicker } from "./styles";

export default function Dropdown() {
  return (
    <CustomPicker>
      <CustomPicker.Item label="Mantenimiento" value="maintenance" />
      <CustomPicker.Item label="Agua" value="water" />
    </CustomPicker>
  );
}
