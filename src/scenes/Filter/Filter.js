import React, { useState } from "react";
import { Image } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/button/Button";

import NextLogo from "../../assets/next.png";
import CalendarLogo from "../../assets/calendar.png";

import theme from "../../colorTheme";
import SCREEN from "../../navigatorMap";

import {
  BackContainer,
  FilterContainer,
  FieldContainer,
  ActionContainer,
  HeaderContainer,
  BackTextContainer,
  LineDivider,
  DeleteContainer,
  FieldTextContainer,
  DateContainer
} from "./styles";
import SCREENS from "../../navigatorMap";

export default function Filter({ navigation }) {
  const [inputFields, setInputFields] = useState({});

  // function onFromDate() {
  //   Picker.init({
  //     pickerData: [
  //       ["Enero", "Febrero"],
  //       [2016, 2017, 2018]
  //     ],
  //     pickerTitleText: "Selecciona",
  //     pickerConfirmBtnText: "Confirmar",
  //     pickerCancelBtnText: "Cancelar",
  //     pickerFontSize: 24,
  //     pickerToolBarFontSize: 18,
  //     onPickerConfirm: ([month, year]) => {
  //       setInputFields({ ...inputFields, fromDate: { month, year } });
  //     }
  //   });
  //   Picker.show();
  // }

  // function onEndDate() {
  //   Picker.init({
  //     pickerData: [
  //       ["Enero", "Febrero"],
  //       [2016, 2017, 2018]
  //     ],
  //     pickerTitleText: "Selecciona",
  //     pickerConfirmBtnText: "Confirmar",
  //     pickerCancelBtnText: "Cancelar",
  //     pickerFontSize: 24,
  //     pickerToolBarFontSize: 18,
  //     onPickerConfirm: ([month, year]) => {
  //       setInputFields({ ...inputFields, endDate: { month, year } });
  //     }
  //   });
  //   Picker.show();
  // }

  return (
    <Container type="gray">
      <BackContainer>
        <BackTextContainer onPress={() => navigation.goBack()}>
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
            Movimientos
          </Title>
        </BackTextContainer>
      </BackContainer>
      <FilterContainer>
        <FieldContainer>
          <Title color={theme.lowDark} size="small">
            Tipo de movimiento
          </Title>
          <Dropdown />
        </FieldContainer>
        <DateContainer>
          <FieldTextContainer>
            <Title color={theme.lowDark} size="small">
              Desde
            </Title>
            <Title color={theme.darkGray} size="small">
              {inputFields.fromDate
                ? `${inputFields.fromDate.month} ${inputFields.fromDate.year}`
                : "Fecha"}
            </Title>
          </FieldTextContainer>
          <Image style={{ height: 30, width: 30 }} source={CalendarLogo} />
        </DateContainer>

        <DateContainer>
          <FieldTextContainer>
            <Title color={theme.lowDark} size="small">
              Hasta
            </Title>
            <Title color={theme.darkGray} size="small">
              {inputFields.endDate
                ? `${inputFields.endDate.month} ${inputFields.endDate.year}`
                : "Fecha"}
            </Title>
          </FieldTextContainer>
          <Image style={{ height: 30, width: 30 }} source={CalendarLogo} />
        </DateContainer>
      </FilterContainer>
      <ActionContainer>
        <Button
          backgroundColor={theme.lowDark}
          text="Continuar"
          onPress={() => navigation.navigate(SCREENS.DETAILS)}
        />
      </ActionContainer>
    </Container>
  );
}
