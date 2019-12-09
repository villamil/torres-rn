import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";

const TitleSize = {
  XL: "46px",
  large: "32px",
  medium: "24px",
  small: "18px",
  tiny: "12px"
};

const ButtonText = styled.Text`
  color: ${theme.green};
  text-align: center;
  font-size: ${({ size }) => {
    return TitleSize[size] || "12px";
  }};
`;

const ButtonContainer = styled.TouchableOpacity``;

const ButtonOnlyText = props => (
  <ButtonContainer onPress={props.onPress}>
    <ButtonText {...props}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default ButtonOnlyText;
