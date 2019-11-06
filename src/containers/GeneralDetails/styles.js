import styled from "styled-components";
import theme from "../../colorTheme";

export const DetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleContainer = styled.View`
  left: 20;
  align-items: flex-start;
`;

export const DetailContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${theme.gray};
  padding: 20px;
  height: 12%;
  width: 100%;
  margin-bottom: 15px;
`;

export const DetailLogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 37%;
`;

export const SecondColumn = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  background-color: gray;
`;

export const UpperRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LowerRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ViewMoreContainer = styled.View`
  height: 35%;
  width: 90%;
  justify-content: flex-end;
`;
