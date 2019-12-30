import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import theme from "../../colorTheme";

const TitleSize = {
  XL: hp("6%"),
  large: hp("3.5%"),
  medium: hp("3%"),
  small: hp("2.5%"),
  tiny: hp("2%")
};

const Title = styled.Text`
  font-size: ${({ size }) => {
    return TitleSize[size] || hp("3%");
  }};
  font-weight: ${({ bold }) => {
    return bold ? "bold" : 500;
  }};
  color: ${({ color }) => {
    return color || theme.light;
  }};
  text-align: ${({ align }) => {
    return align || "center";
  }};
  opacity: ${({ opacity }) => {
    return opacity || 1;
  }};
  letter-spacing: ${({ letterSpacing }) => {
    return letterSpacing || 0;
  }};
`;

const StyledTitle = styled(Title)``;

export default StyledTitle;
