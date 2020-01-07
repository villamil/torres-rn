import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import theme from "../../colorTheme";

export const ViewMoreContainer = styled.View`
  height: 25%;
  width: 90%;
  justify-content: flex-end;
`;

export const PullBarr = styled.View`
  border-bottom-color: ${theme.dark};
  border-bottom-width: ${hp(0.5)};
  border-radius: 2px;
  opacity: 0.3;
  width: 8%;
`;

export const PullMenuContainer = styled.View`
  padding-top: 2%;
  width: 100%;
  align-items: center;
`;

export const PullContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: ${hp(5)};
`;
