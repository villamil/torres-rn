import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";

const ButtonText = styled.Text`
  color: ${({ color }) => {
    return color || theme.light;
  }};
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) => {
    return backgroundColor || theme.green;
  }};
  border-radius: 25px;
  padding: 12px 100px 12px 100px;
`;

const CustomButton = props => (
  <ButtonContainer
    onPress={props.onPress}
    backgroundColor={props.backgroundColor}
  >
    <ButtonText color={props.color}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default CustomButton;
