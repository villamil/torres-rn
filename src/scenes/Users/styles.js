import styled from "styled-components";
import theme from "../../colorTheme";

export const HeaderContainer = styled.View`
  height: 10%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
`;

export const BackTextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BackContainer = styled.View`
  width: 90%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UsersContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const UserContainer = styled.View`
  width: 90%;
  height: 120;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  width: 60%;
  justify-content: space-between;
`;

export const LineDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.gray};
  width: 100%;
  height: 1px;
`;
