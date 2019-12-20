import React, { useEffect } from "react";
import { Image, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import { getMaintenance } from "../../store/actions/maintenance.action";
import { getWater } from "../../store/actions/water.action";

import NextLogo from "../../assets/next.png";
import MaintenanceDark from "../../assets/maintenance-logo-dark.png";
import WaterDark from "../../assets/water-logo-dark.png";

import theme from "../../colorTheme";
import { MONTHS_MAP } from "../../utils/dates";
import numberWithCommas from "../../utils/numberWithCommas";

const types = {
  maintenance: "Mantenimiento",
  water: "Agua",
  all: "Resumen"
};

import {
  BackContainer,
  BackTextContainer,
  DetailContainer,
  UpperRow,
  DetailLogoContainer,
  CenterRow,
  LowerRow
} from "./styles";

const mapStateToProps = ({ auth, maintenance, water }) => ({
  auth,
  maintenance,
  water
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getMaintenance, getWater }, dispatch);
};

function MaintenanceOwed(props) {
  const isLoading = props.maintenance.loading || props.water.loading;
  useEffect(() => {
    switch (props.navigation.getParam("type")) {
      case "maintenance": {
        props.getMaintenance(props.auth.defaultUnitId);
        break;
      }
      case "water": {
        props.getWater(props.auth.defaultUnitId);
        break;
      }
      case "all": {
        props.getMaintenance(props.auth.defaultUnitId);
        props.getWater(props.auth.defaultUnitId);
        break;
      }
      default:
        return [];
    }

    return () => {
      props.getMaintenance(props.auth.defaultUnitId, 2);
      props.getWater(props.auth.defaultUnitId, 2);
    };
  }, []);

  function renderOwedMaintenance() {
    let data = [];
    switch (props.navigation.getParam("type")) {
      case "maintenance": {
        data = [...Object.values(props.maintenance.data)];
        break;
      }
      case "water": {
        data = [
          ...Object.values(props.water.data).map(item => ({
            ...item,
            isWater: true
          }))
        ];
        break;
      }
      case "all": {
        data = [
          ...Object.values(props.maintenance.data),
          ...Object.values(props.water.data).map(item => ({
            ...item,
            isWater: true
          }))
        ];
        break;
      }
      default:
        return [];
    }

    const details = [...data].sort((a, b) => {
      return b.year - a.year || b.month - a.month;
    });
    return details.map(item => (
      <DetailContainer key={item.id}>
        <UpperRow>
          <DetailLogoContainer>
            <Image
              style={{ height: 35, width: 35 }}
              source={item.isWater ? WaterDark : MaintenanceDark}
            />
            <Title color={theme.dark} size="tiny" style={{ marginLeft: 5 }}>
              {item.isWater ? "Agua" : "Mantenimiento"}
            </Title>
          </DetailLogoContainer>
          <Title color={theme.lowDark} size="small">
            $ {numberWithCommas(item.paidAmount)} MXN
          </Title>
        </UpperRow>
        <CenterRow>
          <Title color={theme.dark} opacity="0.7" size="tiny">
            De
          </Title>
        </CenterRow>
        <LowerRow>
          <Title color={theme.dark} opacity="0.7" size="tiny">
            {MONTHS_MAP[item.month]} {item.year} -{" "}
            {item.paid ? "Pagado" : "Pendiente"}
          </Title>
          <Title color={theme.lowDark} size="small">
            $ {numberWithCommas(item.dueAmount)} MXN
          </Title>
        </LowerRow>
      </DetailContainer>
    ));
  }

  return (
    <Container type="gray">
      <BackContainer>
        <BackTextContainer onPress={() => props.navigation.goBack()}>
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
            {types[props.navigation.getParam("type") || "-"]}
          </Title>
        </BackTextContainer>
      </BackContainer>
      <ScrollView style={{ width: "100%" }}>
        {isLoading ? (
          <ActivityIndicator size="large" color={theme.green} />
        ) : (
          renderOwedMaintenance()
        )}
      </ScrollView>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceOwed);
