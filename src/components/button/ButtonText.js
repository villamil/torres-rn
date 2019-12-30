import React from "react";
import styled from "styled-components";
import theme from "../../colorTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const TitleSize = {
  XL: hp("4%"),
  large: hp("3.5%"),
  medium: hp("3%"),
  small: hp("2.5%"),
  tiny: hp("2%")
};

const ButtonText = styled.Text`
  color: ${theme.green};
  text-align: center;
  font-size: ${({ size }) => {
    return TitleSize[size] || hp("2%");
  }};
`;

const ButtonContainer = styled.TouchableOpacity``;

const ButtonOnlyText = props => (
  <ButtonContainer onPress={props.onPress}>
    <ButtonText {...props}>{props.text}</ButtonText>
  </ButtonContainer>
);

export default ButtonOnlyText;
