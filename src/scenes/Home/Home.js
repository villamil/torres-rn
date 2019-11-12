import React, { useEffect, useState } from "react";
import { Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import BottomDrawer from "rn-bottom-drawer";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import GeneralDetails from "../../containers/GeneralDetails";
import UnitsSelector from "../../containers/UnitsSelector";
import SCREENS from "../../navigatorMap";

import MaintenanceLogo from "../../assets/maintenance-logo.png";
import WaterLogo from "../../assets/water-logo.png";
import MenuIcon from "../../assets/menu-button.png";
import AddIcon from "../../assets/add.png";
import CloseIcon from "../../assets/cross.png";

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
  MenuTouchable,
  ModalContainer,
  CloseContainer,
  ModalContent,
  CloseTouchable
} from "./styles";

export default function Home({ navigation }) {
  const [unitPopUp, setUnitPopUp] = useState(false);
  const deviceHeight = Math.round(Dimensions.get("window").height);
  const drawerOffset = Math.round(deviceHeight * 0.33);
  const drawerHeight = Math.round(deviceHeight * 1.3);

  if (navigation.getParam("unitPopUp") && !unitPopUp) {
    setUnitPopUp(true);
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        visible={unitPopUp}
        transparent={true}
        onRequestClose={() => {
          setUnitPopUp(false);
          navigation.setParams({ unitPopUp: false });
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(230,230,230, 0.2)"
          }}
          activeOpacity={1}
          onPressOut={() => {
            setUnitPopUp(false);
            navigation.setParams({ unitPopUp: false });
          }}
        >
          <ModalContainer>
            <ModalContent>
              <CloseContainer>
                <CloseTouchable
                  onPress={() => {
                    setUnitPopUp(false);
                    navigation.setParams({ unitPopUp: false });
                  }}
                >
                  <Image style={{ height: 20, width: 20 }} source={CloseIcon} />
                </CloseTouchable>
                <Title color={theme.dark} size="small">
                  Selecciona
                </Title>
              </CloseContainer>
              <UnitsSelector />
            </ModalContent>
          </ModalContainer>
        </TouchableOpacity>
      </Modal>
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
          <GeneralDetails navigation={navigation} />
        </Container>
      </BottomDrawer>
    </Container>
  );
}
