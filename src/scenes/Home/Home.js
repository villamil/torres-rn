import React from "react";
import { Image, Dimensions } from "react-native";
import BottomDrawer from "rn-bottom-drawer";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import GeneralDetails from "../../containers/GeneralDetails";
import SCREENS from "../../navigatorMap";

import MaintenanceLogo from "../../assets/maintenance-logo.png";
import WaterLogo from "../../assets/water-logo.png";
import MenuIcon from "../../assets/menu-button.png";
import AddIcon from "../../assets/add.png";

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
  MenuContainer,
  MenuTouchable
} from "./styles";

export default function Home({ navigation }) {
  const deviceHeight = Math.round(Dimensions.get("window").height);
  const drawerOffset = Math.round(deviceHeight * 0.33);
  const drawerHeight = Math.round(deviceHeight * 1.3);
  return (
    <Container>
      <MenuContainer>
        <MenuTouchable onPress={() => navigation.openDrawer()}>
          <Image style={{ height: 25, width: 25 }} source={MenuIcon} />
        </MenuTouchable>
        <MenuTouchable onPress={() => navigation.navigate(SCREENS.INVITE)}>
          <Image style={{ height: 25, width: 25 }} source={AddIcon} />
        </MenuTouchable>
      </MenuContainer>
      <UnitContainer>
        <Title size="medium" opacity="0.5" letterSpacing="2px">
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
              <Title size="tiny">Mantenimiento</Title>
            </TitleLeftContainer>
            <Title color={theme.lowGreen}>$ 700.00 MXN</Title>
          </ServiceTitleContainer>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitleContainer>
            <TitleLeftContainer>
              <Image
                style={{ height: 35, width: 35, marginRight: 10 }}
                source={WaterLogo}
              />
              <Title size="tiny">Agua</Title>
            </TitleLeftContainer>
            <Title color={theme.lowGreen}>$ 72.00 MXN</Title>
          </ServiceTitleContainer>
        </ServiceItem>
      </ServicesContainer>
      <BottomDrawer
        containerHeight={drawerHeight}
        offset={Math.abs(drawerOffset) * -1}
        startUp={false}
      >
        <Container type="light" radius="100px">
          <PullMenuContainer>
            <PullBarr />
          </PullMenuContainer>
          <PullContainer>
            <Title color={theme.dark} opacity="0.7" letterSpacing="2px">
              Detalles
            </Title>
          </PullContainer>
          <GeneralDetails />
        </Container>
      </BottomDrawer>
    </Container>
  );
}
