import styled from "styled-components";
import theme from "../../colorTheme";

export const CheckBoxContainer = styled.TouchableOpacity`
  background-color: ${theme.dark};
  align-items: center;
  justify-content: center;
`;

export const CheckBoxBorder = styled.View`
  width: 25;
  height: 25;
  background-color: ${theme.dark};
  border-color: ${theme.green};
  border-width: 2px;
  border-radius: 2px;
  background-color: ${({ checked }) => {
    return checked ? theme.green : theme.dark;
  }};
`;
