import styled from "styled-components";

import theme from "../../colorTheme";

export const BackContainer = styled.View`
  width: 90%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackTextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const DetailContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${theme.white};
  padding: 20px;
  height: 120;
  width: 100%;
  margin-bottom: 15px;
`;

export const UpperRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailLogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  width: 37%;
`;

export const CenterRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const LowerRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
