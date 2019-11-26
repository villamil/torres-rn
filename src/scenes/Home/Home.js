import React, { useState, useEffect } from "react";
import {
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  BackHandler
} from "react-native";
import BottomDrawer from "rn-bottom-drawer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";

import GeneralDetails from "../../containers/GeneralDetails";
import UnitsSelector from "../../containers/UnitsSelector";
import SCREENS from "../../navigatorMap";

import MaintenanceLogo from "../../assets/maintenance-logo.png";
import WaterLogo from "../../assets/water-logo.png";
import MenuIcon from "../../assets/menu-button.png";
import AddIcon from "../../assets/add.png";
import CloseIcon from "../../assets/cross.png";

import { getUnit } from "../../store/actions/unit.action";
import { getMaintenance } from "../../store/actions/maintenance.action";
import { getWater } from "../../store/actions/water.action";

import theme from "../../colorTheme";

import {
  UnitContainer,
  ServicesContainer,
  ServiceItem,
  ServiceTitleContainer,
  TitleLeftContainer,
  ViewMoreContainer,
  PullBarr,
  PullMenuContainer,
  PullContainer,
  MenuContainer,
  MenuTouchable,
  ModalContainer,
  CloseContainer,
  ModalContent,
  CloseTouchable,
  AmountContainer
} from "./styles";

const mapStateToProps = ({ auth, unit, maintenance, water }) => ({
  auth,
  unit,
  maintenance,
  water
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUnit,
      getMaintenance,
      getWater
    },
    dispatch
  );
};

function Home(props) {
  const [unitPopUp, setUnitPopUp] = useState(false);
  const deviceHeight = Math.round(Dimensions.get("window").height);
  const drawerOffset = Math.round(deviceHeight * 0.33);
  const drawerHeight = Math.round(deviceHeight * 1.3);

  console.log(props.unit);

  useEffect(() => {
    console.log("-------UPDATE HOME ----------------");
    console.log(props.auth.defaultUnitId);
    props.getUnit(props.auth.defaultUnitId);
    props.getMaintenance(props.auth.defaultUnitId);
    props.getWater(props.auth.defaultUnitId);
  }, [props.auth]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  if (props.navigation.getParam("unitPopUp") && !unitPopUp) {
    setUnitPopUp(true);
  }

  return (
    <Container type="darkBlue">
      <Modal
        animationType="fade"
        visible={unitPopUp}
        transparent={true}
        onRequestClose={() => {
          setUnitPopUp(false);
          props.navigation.setParams({ unitPopUp: false });
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
            props.navigation.setParams({ unitPopUp: false });
          }}
        >
          <ModalContainer>
            <ModalContent>
              <CloseContainer>
                <CloseTouchable
                  onPress={() => {
                    setUnitPopUp(false);
                    props.navigation.setParams({ unitPopUp: false });
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
        <MenuTouchable onPress={() => props.navigation.openDrawer()}>
          <Image style={{ height: 25, width: 25 }} source={MenuIcon} />
        </MenuTouchable>
        <MenuTouchable
          onPress={() => props.navigation.navigate(SCREENS.INVITE)}
        >
          <Image style={{ height: 25, width: 25 }} source={AddIcon} />
        </MenuTouchable>
      </MenuContainer>
      <UnitContainer>
        <Title size="medium" opacity="0.5" letterSpacing="2px">
          Departamento
        </Title>
        <Title size="XL">
          {props.unit.data.number}
          {props.unit.data.section}
        </Title>
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
            <AmountContainer>
              <Title color={theme.light}>
                $ {props.unit.data.totalMaintenanceOwed} MXN
              </Title>
            </AmountContainer>
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
            <AmountContainer>
              <Title color={theme.light}>
                $ {props.unit.data.totalWaterOwed} MXN
              </Title>
            </AmountContainer>
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
          <ViewMoreContainer>
            <Button
              text="Ver Mas"
              backgroundColor={theme.lowDark}
              onPress={() => props.navigation.navigate(SCREENS.FILTER)}
            />
          </ViewMoreContainer>
        </Container>
      </BottomDrawer>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
