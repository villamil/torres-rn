import React from "react";
import { Image } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import NextLogo from "../../assets/next.png";

import theme from "../../colorTheme";

import { BackContainer, BackTextContainer } from "./styles";

export default function MaintenanceOwed({ navigation }) {
  return (
    <Container type="gray">
      <BackContainer>
        <BackTextContainer onPress={() => navigation.goBack()}>
          <Image
            style={{
              height: 25,
              width: 25,
              transform: [{ rotate: "180deg" }],
              marginRight: 10
            }}
            source={NextLogo}
          />
          <Title color={theme.dark} size="small">
            Mantenimiento
          </Title>
        </BackTextContainer>
      </BackContainer>
    </Container>
  );
}
