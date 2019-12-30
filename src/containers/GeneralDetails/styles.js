import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import theme from "../../colorTheme";

export const DetailsContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 57%;
`;

export const TitleContainer = styled.View`
  left: 20;
  align-items: flex-start;
`;

export const DetailContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${theme.gray};
  padding: ${`${hp("2%")}px`};
  height: ${hp("14%")};
  width: 100%;
  margin-bottom: 15px;
`;

export const DetailLogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
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

export const ViewMoreContainer = styled.View`
  height: 35%;
  width: 90%;
  justify-content: flex-end;
`;

export const BankDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BankContainer = styled.View`
  height: 50px;
  width: 90%;
`;
