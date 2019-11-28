import React from "react";

import { CustomPicker } from "./styles";

export default function Dropdown(props) {
  function renderItems() {
    return props.items.map(item => (
      <CustomPicker.Item
        key={item.value}
        label={item.label}
        value={item.value}
      />
    ));
  }
  return <CustomPicker>{renderItems()}</CustomPicker>;
}
