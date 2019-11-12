import React from "react";

import Title from "../../components/text/Title";

import theme from "../../colorTheme";

import { Container, UnitContainer } from "./styles";

export default function UnitsSelector() {
  return (
    <Container>
      <UnitContainer>
        <Title color={theme.dark}>102A</Title>
      </UnitContainer>
      <UnitContainer>
        <Title color={theme.dark}>1002A</Title>
      </UnitContainer>
    </Container>
  );
}
