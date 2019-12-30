import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const LogoContainer = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IntroContainer = styled.View`
  width: 60%;
  height: 20%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const CreateContainer = styled.View`
  height: 13%;
  justify-content: space-between;
  align-items: center;
  bottom: 10%;
  width: 100%;
`;

export const AlreadyAnAccountConteiner = styled.View`
  flex-direction: row;
  justify-content: center;
`;
