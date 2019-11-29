import React from "react";
import {
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MaintenanceDark from "../../assets/maintenance-logo-dark.png";
import WaterDark from "../../assets/water-logo-dark.png";

import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import theme from "../../colorTheme";
import SCREENS from "../../navigatorMap";
import { MONTHS_MAP } from "../../utils/dates";

import {
  DetailsContainer,
  TitleContainer,
  DetailContainer,
  UpperRow,
  LowerRow,
  DetailLogoContainer,
  CenterRow,
  BankDetailsContainer,
  BankContainer
} from "./styles";

const mapStateToProps = ({ maintenance, unit, water }) => ({
  maintenance,
  water,
  unit
});

function GeneralDetails(props) {
  function renderDetailContainer() {
    const details = [
      ...Object.values(props.maintenance.data),
      ...Object.values(props.water.data).map(item => ({
        ...item,
        isWater: true
      }))
    ].sort((a, b) => {
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
    <DetailsContainer>
      <BankContainer>
        <BankDetailsContainer>
          <Title color={theme.dark} size="tiny">
            CLABE
          </Title>
          <Title color={theme.dark} size="tiny">
            044320010035196356
          </Title>
        </BankDetailsContainer>
        <BankDetailsContainer>
          <Title color={theme.dark} size="tiny">
            Referencia
          </Title>
          <Title color={theme.dark} size="tiny">
            {props.unit.data.reference}
          </Title>
        </BankDetailsContainer>
      </BankContainer>
      {renderDetailContainer()}
    </DetailsContainer>
  );
}

export default connect(mapStateToProps, null)(GeneralDetails);
