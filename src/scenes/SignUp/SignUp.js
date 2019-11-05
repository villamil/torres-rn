import React from "react";
import { Image, TextInput } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";

import { LogoContainer, InputContainer, NextContainer } from "./styles";

import theme from "../../colorTheme";

export default function SignUp() {
  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={Torres}
        />
      </LogoContainer>
      <InputContainer>
        <Title>CODIGO</Title>
        <TextInput
          style={{
            height: 40,
            borderBottomWidth: 1,
            width: "100%",
            color: theme.light,
            borderBottomColor: theme.light,
            textDecorationLine: "none",
            textAlign: "center"
          }}
        />
        <Title size="tiny" color={theme.green} style={{ marginTop: 10 }}>
          Para obtener tu codigo, ponte en contacto con la administracion.
        </Title>
      </InputContainer>
      <NextContainer>
        <Button text="SIGUIENTE" />
      </NextContainer>
    </Container>
  );
}
