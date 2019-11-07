import React from "react";
import { Image } from "react-native";

import MaintenanceDark from "../../assets/maintenance-logo-dark.png";

import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import theme from "../../colorTheme";

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

export default function GeneralDetails() {
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
            10116
          </Title>
        </BankDetailsContainer>
      </BankContainer>
      <DetailContainer>
        <UpperRow>
          <DetailLogoContainer>
            <Image style={{ height: 35, width: 35 }} source={MaintenanceDark} />
            <Title color={theme.dark} size="tiny">
              Mantenimiento
            </Title>
          </DetailLogoContainer>
          <Title color={theme.green} size="small">
            $ 700.00 MXN
          </Title>
        </UpperRow>
        <LowerRow>
          <Title color={theme.dark} opacity="0.7" size="tiny">
            Febrero 2019 - Pagado
          </Title>
        </LowerRow>
      </DetailContainer>

      <DetailContainer>
        <UpperRow>
          <DetailLogoContainer>
            <Image style={{ height: 35, width: 35 }} source={MaintenanceDark} />
            <Title color={theme.dark} size="tiny">
              Mantenimiento
            </Title>
          </DetailLogoContainer>
          <Title color={theme.green} size="small">
            $ 700.00 MXN
          </Title>
        </UpperRow>
        <LowerRow>
          <Title color={theme.dark} opacity="0.7" size="tiny">
            Febrero 2019 - Pagado
          </Title>
        </LowerRow>
      </DetailContainer>

      <ViewMoreContainer>
        <Button text="Ver Mas" backgroundColor={theme.lowDark} />
      </ViewMoreContainer>
    </DetailsContainer>
  );
}
