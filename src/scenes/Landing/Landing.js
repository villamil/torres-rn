import React, { useEffect } from "react";
import { Image, Linking } from "react-native";
import queryString from "query-string";

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
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        const params = queryString.parse(url.replace("app://torres?", ""));
        navigation.navigate(SCREENS.SIGN_UP, { code: params.code });
      }
    });
  }, []);

  return (
    <Container>
      <AuthCheck navigation={navigation} />
      <LogoContainer>
        <Image
          style={{ width: 80, height: 80, marginRight: 10 }}
          source={Torres}
        />
        <Title>TORRES</Title>
      </LogoContainer>
      <IntroContainer>
        <Title size="small">Empieza a administrar tu condominio</Title>
      </IntroContainer>
      <Carousel entries={CarouselItems} />
      <CreateContainer>
        <Button
          text="CREAR TU CUENTA"
          onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
        />
        <AlreadyAnAccountConteiner>
          <Title size="tiny">¿Ya tienes una cuenta?</Title>
          <ButtonText
            text="Inicia sesion"
            onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
          />
        </AlreadyAnAccountConteiner>
      </CreateContainer>
    </Container>
  );
}
