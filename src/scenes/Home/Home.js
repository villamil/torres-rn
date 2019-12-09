import React, { useState, useEffect } from "react";
import {
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  BackHandler,
  RefreshControl,
  ScrollView,
  View
} from "react-native";
import BottomDrawer from "rn-bottom-drawer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import ButtonText from "../../components/button/ButtonText";

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
  const [refreshing, setRefreshing] = useState(false);
  const deviceHeight = Math.round(Dimensions.get("window").height);
  const drawerOffset = Math.round(deviceHeight * 0.33);
  const drawerHeight = Math.round(deviceHeight * 1.3);
  useEffect(() => {
    refreshStore();
  }, []);

  useEffect(() => {
    refreshStore();
  }, [props.auth.defaultUnitId]);

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

  useEffect(() => {
    if (
      !props.unit.loading &&
      !props.maintenance.loading &&
      !props.water.loading
    ) {
      setRefreshing(false);
    }
  }, [props.unit, props.maintenance, props.water]);

  const refreshStore = () => {
    props.getUnit(props.auth.defaultUnitId);
    props.getMaintenance(props.auth.defaultUnitId, 2);
    props.getWater(props.auth.defaultUnitId, 2);
  };

  const onRefresh = () => {
    setRefreshing(true);
    refreshStore();
  };

  if (props.navigation.getParam("unitPopUp") && !unitPopUp) {
    setUnitPopUp(true);
  }

  function handleCloseModal() {
    setUnitPopUp(false);
    props.navigation.setParams({ unitPopUp: false });
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
            backgroundColor: "rgba(13, 16, 21, 0.5)"
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CloseTouchable onPress={handleCloseModal}>
                    <Image
                      style={{ height: 20, width: 20, marginRight: 10 }}
                      source={CloseIcon}
                    />
                  </CloseTouchable>
                  <Title color={theme.dark} size="small">
                    Selecciona
                  </Title>
                </View>
                <ButtonText text="Agregar" size="small" />
              </CloseContainer>
              <UnitsSelector handleCloseModal={handleCloseModal} />
            </ModalContent>
          </ModalContainer>
        </TouchableOpacity>
      </Modal>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Container type="darkBlue">
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
            <ServiceItem
              onPress={() =>
                props.navigation.navigate(SCREENS.MAINTENANCE_OWED, {
                  type: "maintenance"
                })
              }
            >
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
            <ServiceItem
              onPress={() =>
                props.navigation.navigate(SCREENS.MAINTENANCE_OWED, {
                  type: "water"
                })
              }
            >
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
        </Container>
      </ScrollView>
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
              onPress={() =>
                props.navigation.navigate(SCREENS.MAINTENANCE_OWED, {
                  type: "all"
                })
              }
            />
          </ViewMoreContainer>
        </Container>
      </BottomDrawer>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
