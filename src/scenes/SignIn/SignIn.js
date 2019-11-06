import React, { useState } from "react";
import { Image, TextInput } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Input from "../../components/input/input";

import Torres from "../../assets/torres.png";
import SCREENS from "../../navigatorMap";

import theme from "../../colorTheme";

import {
  LogoContainer,
  InputContainer,
  NextContainer,
  TitleContainer
} from "./styles";

export default function SignIn({ navigation }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={Torres}
        />
      </LogoContainer>
      <TitleContainer>
        <Title>¡Bienvenido!</Title>
      </TitleContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Correo
        </Title>
        <Input value={emailValue} onChangeText={text => setEmailValue(text)} />
      </InputContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Contrasenia
        </Title>
        <Input
          value={passwordValue}
          onChangeText={text => setPasswordValue(text)}
          secureTextEntry={true}
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
