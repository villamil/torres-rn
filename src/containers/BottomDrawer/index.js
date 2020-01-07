import React, { useState } from "react";

import BottomDrawer from "./BottomDrawer";

export default function Wrapper(props) {
  const [currentPosition, setCurrentPosition] = useState(props.currentPosition);
  const [upPosition, setupPosition] = useState(props.upPosition);
  const [downPosition, setdownPosition] = useState(props.downPosition);

  return (
    <BottomDrawer
      setCurrentPosition={position => setCurrentPosition(position)}
      currentPosition={currentPosition}
      upPosition={upPosition}
      downPosition={downPosition}
      navigation={props.navigation}
    />
  );
}
