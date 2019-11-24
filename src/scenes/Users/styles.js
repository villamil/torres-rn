import styled from "styled-components";
import theme from "../../colorTheme";

export const HeaderContainer = styled.View`
  height: 5%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
`;

export const BackTextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const DeleteContainer = styled.TouchableOpacity``;

export const BackContainer = styled.View`
  width: 90%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InviteContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
`;

export const UsersContainer = styled.ScrollView`
  width: 100%;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 20;
  height: 120;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.light};
`;

export const NameContainer = styled.View`
  width: 60%;
  height: 50%;
  justify-content: space-between;
`;

export const LineDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.gray};
  width: 100%;
  height: 1px;
`;
