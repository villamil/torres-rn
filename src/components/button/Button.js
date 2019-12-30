import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const ButtonText = styled.Text`
  color: ${({ color }) => {
    return color || theme.light;
  }};
  text-align: center;
  font-size: ${hp("2%")};
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ backgroundColor, disabled }) => {
    return disabled ? theme.darkGray : backgroundColor || theme.green;
  }};
  border-radius: 25px;
  padding: 12px 100px 12px 100px;
`;

const CustomButton = ({ testID, ...props }) => (
  <ButtonContainer
    testID={testID}
    onPress={props.onPress}
    backgroundColor={props.backgroundColor}
    {...props}
  >
    <ButtonText color={props.color} {...props}>
      {props.text}
    </ButtonText>
  </ButtonContainer>
);

export default CustomButton;
