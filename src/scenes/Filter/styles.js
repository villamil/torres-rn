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

export const FilterContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const FieldContainer = styled.View`
  width: 100%;
  padding: 5%;
  margin-bottom: 20;
  height: 120;
  align-items: flex-start;
  background-color: ${theme.light};
`;

export const DateContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 5%;
  margin-bottom: 20;
  height: 120;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.light};
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

export const FieldTextContainer = styled.View`
  justify-content: space-between;
  height: 70%;
  align-items: flex-start;
`;

export const ActionContainer = styled.View`
  height: 30%;
  width: 80%;
  justify-content: flex-end;
`;
