import React from "react";
import { Image, ScrollView } from "react-native";
import { connect } from "react-redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";

import NextLogo from "../../assets/next.png";
import MaintenanceDark from "../../assets/maintenance-logo-dark.png";
import WaterDark from "../../assets/water-logo-dark.png";

import theme from "../../colorTheme";
import { MONTHS_MAP } from "../../utils/dates";

import {
  BackContainer,
  BackTextContainer,
  DetailContainer,
  UpperRow,
  DetailLogoContainer,
  CenterRow,
  LowerRow
} from "./styles";

const mapStateToProps = ({ maintenance, water }) => ({ maintenance, water });

function MaintenanceOwed(props) {
  function renderOwedMaintenance() {
    const data =
      props.navigation.getParam("type") === "maintenance"
        ? Object.values(props.maintenance.data)
        : Object.values(props.water.data).map(item => ({
            ...item,
            isWater: true
          }));
    const details = [...data].sort((a, b) => {
      return b.month - a.month;
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
            $ {item.paidAmount} MXN
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
            $ {item.dueAmount} MXN
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
            {props.navigation.getParam("type") === "maintenance"
              ? "Mantenimiento"
              : "Agua"}
          </Title>
        </BackTextContainer>
      </BackContainer>
      <ScrollView style={{ width: "100%" }}>
        {renderOwedMaintenance()}
      </ScrollView>
    </Container>
  );
}

export default connect(mapStateToProps, null)(MaintenanceOwed);
