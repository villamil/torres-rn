import styled from "styled-components";

import theme from "../../colorTheme";

export const MenuContainer = styled.View`
  flex: 1;
  background-color: ${theme.light};
`;

export const ProfileContainer = styled.View`
  width: 90%;
  height: 30%;
  /* background-color: gray; */
  align-items: flex-start;
  align-self: center;
  justify-content: center;
`;

export const NamesContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 68%;
`;

export const LineDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.gray};
  width: 100%;
  height: 1px;
`;
