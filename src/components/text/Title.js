import styled from "styled-components";
import theme from "../../colorTheme";

const TitleSize = {
  XL: "46px",
  large: "32px",
  medium: "24px",
  small: "18px",
  tiny: "12px"
};

const Title = styled.Text`
  font-size: ${({ size }) => {
    return TitleSize[size] || "24px";
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
