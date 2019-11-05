import React from "react";
import { Image, TextInput } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import SCREENS from "../../navigatorMap";

import theme from "../../colorTheme";

import { LogoContainer, InputContainer, NextContainer } from "./styles";

export default function SignIn({ navigation }) {
  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={Torres}
        />
      </LogoContainer>
      <Title>¡Bienvenido!</Title>
      <InputContainer>
        <TextInput
          style={{
            height: 40,
            borderBottomWidth: 1,
            width: "100%",
            color: theme.light,
            borderBottomColor: theme.light,
            textDecorationLine: "none"
          }}
          placeholderTextColor={theme.green}
          placeholder="Correo"
        />
      </InputContainer>
      <InputContainer>
        <TextInput
          style={{
            height: 40,
            borderBottomWidth: 1,
            width: "100%",
            color: theme.light,
            borderBottomColor: theme.light,
            textDecorationLine: "none"
          }}
          placeholderTextColor={theme.green}
          placeholder="Contrasenia"
        />
      </InputContainer>

      <NextContainer>
        <Button
          text="INGRESAR"
          onPress={() => navigation.navigate(SCREENS.HOME)}
        />
      </NextContainer>
    </Container>
  );
}
