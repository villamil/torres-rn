import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const LogoContainer = styled.View`
  height: 25%;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 80%;
  align-items: flex-start;
`;

export const NextContainer = styled.View`
  height: 45%;
  width: ${wp("90%")};
  justify-content: flex-end;
`;
