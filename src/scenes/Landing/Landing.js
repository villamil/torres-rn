import React, { useEffect } from "react";
import { Image, Linking } from "react-native";
import queryString from "query-string";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import ButtonText from "../../components/button/ButtonText";
import Carousel from "../../components/Carousel";
import AuthCheck from "../../components/AuthCheck";

import Torres from "../../assets/torres.png";
import MaintenanceCard from "../../assets/maintenance-card.png";
import WaterCard from "../../assets/water-card.png";
import RulesCard from "../../assets/rules-card.png";
import SecurityCard from "../../assets/security-card.png";

import SCREENS from "../../navigatorMap";

import {
  LogoContainer,
  IntroContainer,
  CreateContainer,
  AlreadyAnAccountConteiner
} from "./styles";

const CarouselItems = [
  {
    src: MaintenanceCard
  },
  {
    src: WaterCard
  },
  {
    src: RulesCard
  },
  {
    src: SecurityCard
  }
];

export default function Landing({ navigation }) {
  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: wp("22%"), height: hp("12%"), marginRight: 10 }}
          source={Torres}
        />
        <Title>TORRES</Title>
      </LogoContainer>
      <IntroContainer>
        <Title size="small" id="welcome-message">
          Empieza a administrar tu condominio
        </Title>
      </IntroContainer>
      <Carousel entries={CarouselItems} />
      <CreateContainer>
        <Button
          text="CREAR TU CUENTA"
          onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
        />
        <AlreadyAnAccountConteiner>
          <Title size="tiny" style={{ marginRight: 7 }}>
            ¿Ya tienes una cuenta?
          </Title>
          <ButtonText
            text="Inicia sesión"
            onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
          />
        </AlreadyAnAccountConteiner>
      </CreateContainer>
    </Container>
  );
}
