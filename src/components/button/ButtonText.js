import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";

const ButtonText = styled.Text`
  color: ${theme.green};
  text-align: center;
  font-size: 12px;
`;

const ButtonContainer = styled.TouchableOpacity``;

const ButtonOnlyText = props => (
  <ButtonContainer onPress={props.onPress}>
    <ButtonText>{props.text}</ButtonText>
  </ButtonContainer>
);

export default ButtonOnlyText;
