import React from "react";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import BottomDrawer from "rn-bottom-drawer";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import MaintenanceLogo from "../../assets/maintenance-logo.png";
import WaterLogo from "../../assets/water-logo.png";
import MenuIcon from "../../assets/menu-button.png";

import theme from "../../colorTheme";

import {
  UnitContainer,
  ServicesContainer,
  ServiceItem,
  ServiceTitleContainer,
  TitleLeftContainer,
  SummaryContainer,
  PullBarr,
  PullMenuContainer,
  PullContainer,
  MenuContainer
} from "./styles";

export default function Home() {
  return (
    <Container>
      <MenuContainer>
        <Image style={{ height: 25, width: 25 }} source={MenuIcon} />
      </MenuContainer>
      <UnitContainer>
        <Title size="medium" opacity="0.5">
          Departamento
        </Title>
        <Title size="XL">101A</Title>
      </UnitContainer>
      <ServicesContainer>
        <ServiceItem>
          <ServiceTitleContainer>
            <TitleLeftContainer>
              <Image
                style={{ height: 35, width: 35, marginRight: 10 }}
                source={MaintenanceLogo}
              />
            </TitleLeftContainer>
            <Title size="tiny">Mantenimiento</Title>
          </ServiceTitleContainer>
          <SummaryContainer>
            <Title color={theme.lowGreen}>$ 700.00 MXN</Title>
          </SummaryContainer>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitleContainer>
            <TitleLeftContainer>
              <Image
                style={{ height: 35, width: 35, marginRight: 10 }}
                source={WaterLogo}
              />
            </TitleLeftContainer>
            <Title size="tiny">Agua</Title>
          </ServiceTitleContainer>
          <SummaryContainer>
            <Title color={theme.lowGreen}>$ 72.00 MXN</Title>
          </SummaryContainer>
        </ServiceItem>
      </ServicesContainer>
      <BottomDrawer containerHeight={950} offset={-240} startUp={false}>
        <Container type="light" radius="100px">
          <PullMenuContainer>
            <PullBarr />
          </PullMenuContainer>
          <PullContainer>
            <Title color={theme.dark} opacity="0.7">
              Detalles
            </Title>
          </PullContainer>
        </Container>
      </BottomDrawer>
    </Container>
  );
}
