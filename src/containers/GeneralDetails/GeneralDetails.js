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
  ViewMoreContainer,
  BankDetailsContainer,
  BankContainer
} from "./styles";

const mapStateToProps = ({ maintenance, unit }) => ({
  maintenance,
  unit
});

function GeneralDetails(props) {
  function renderDetailContainer() {
    return Object.values(props.maintenance.data).map(item => (
      <DetailContainer key={item.id}>
        <UpperRow>
          <DetailLogoContainer>
            <Image style={{ height: 35, width: 35 }} source={MaintenanceDark} />
            <Title color={theme.dark} size="tiny">
              Mantenimiento
            </Title>
          </DetailLogoContainer>
          <Title color={item.paid ? theme.green : theme.lowDark} size="small">
            $ {item.dueAmount} MXN
          </Title>
        </UpperRow>
        <LowerRow>
          <Title color={theme.dark} opacity="0.7" size="tiny">
            {MONTHS_MAP[item.month]} {item.year} -{" "}
            {item.paid ? "Pagado" : "Pendiente"}
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
      <ScrollView style={{ width: "100%" }}>
        <TouchableWithoutFeedback>
          <View>{renderDetailContainer()}</View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </DetailsContainer>
  );
}

export default connect(mapStateToProps, null)(GeneralDetails);
