import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";

const ButtonText = styled.Text`
  color: ${theme.light};
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.green};
  border-radius: 25px;
  padding: 12px 100px 12px 100px;
`;

const CustomButton = props => (
  <ButtonContainer onPress={props.onPress}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default CustomButton;
