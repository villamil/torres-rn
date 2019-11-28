import React from "react";
import { Image, TouchableOpacity } from "react-native";
import CloseIcon from "../../../assets/cross.png";

import Title from "../../../components/text/Title";
import theme from "../../../colorTheme";

import {
  ModalContainer,
  CloseContainer,
  ModalContent,
  CloseTouchable
} from "../styles";

function UnitPendingOwed(props) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(230,230,230, 0.2)"
      }}
      activeOpacity={1}
      onPressOut={props.handleCloseModal}
    >
      <ModalContainer>
        <ModalContent>
          <CloseContainer>
            <CloseTouchable onPress={props.handleCloseModal}>
              <Image style={{ height: 20, width: 20 }} source={CloseIcon} />
            </CloseTouchable>
            <Title color={theme.dark} size="small">
              Mantenimiento
            </Title>
          </CloseContainer>
        </ModalContent>
      </ModalContainer>
    </TouchableOpacity>
  );
}

export default UnitPendingOwed;
