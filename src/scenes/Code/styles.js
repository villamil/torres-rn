import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const LogoContainer = styled.View`
  height: 120;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 80%;
  height: 100;

  align-items: flex-start;
`;

export const NextContainer = styled.View`
  height: 50;
  width: ${wp("90%")};
  justify-content: flex-end;
  margin-bottom: 20;
`;

export const InstructionsContainer = styled.View`
  width: 80%;
  height: 40;
`;
