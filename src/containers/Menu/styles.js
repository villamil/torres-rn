import styled from "styled-components";

import theme from "../../colorTheme";

export const MenuContainer = styled.View`
  flex: 1;
  background-color: ${theme.light};
`;

export const ProfileContainer = styled.View`
  width: 90%;
  height: 30%;
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

export const MenuItemsContainer = styled.View`
  margin-top: 20px;
  align-items: center;
  height: 60%;
`;

export const MenuItemContainer = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ItemWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const FooterContainer = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
