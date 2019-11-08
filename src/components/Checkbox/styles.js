import styled from "styled-components";
import theme from "../../colorTheme";

export const CheckBoxContainer = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) => {
    return backgroundColor || theme.dark;
  }};
  align-items: center;
  justify-content: center;
`;

export const CheckBoxBorder = styled.View`
  width: 25;
  height: 25;
  background-color: ${({ checked, checkedColor, backgroundColor }) => {
    return checked
      ? checkedColor || theme.green
      : backgroundColor || theme.dark;
  }};
  border-color: ${theme.green};
  border-width: 1px;
  border-radius: 180px;
`;
