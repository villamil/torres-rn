import styled from "styled-components";
import theme from "../../colorTheme";

export const LogoContainer = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const CodeContainer = styled.View`
  width: 80%;
  height: 15%;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ActionContainer = styled.View`
  height: 45%;
  width: 80%;
  justify-content: flex-end;
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

export const LineDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.gray};
  width: 100%;
  height: 1px;
`;
