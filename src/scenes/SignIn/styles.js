import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const LogoContainer = styled.View`
  height: 15%;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 80%;
  height: ${hp("14")};
  align-items: flex-start;
`;

export const NextContainer = styled.View`
  height: ${hp("35%")};
  width: 80%;
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  height: ${({ height }) => height || "10%"};
`;

export const CheckBoxContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 80%;
`;
