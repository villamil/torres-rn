import styled from "styled-components";
import theme from "../../colorTheme";

export const ProfileContainer = styled.View`
  height: ${({ size }) => {
    return size || 70;
  }};
  width: ${({ size }) => {
    return size || 70;
  }};
  border-radius: 160;
  background-color: ${theme.gray};
  align-items: center;
  justify-content: center;
`;
