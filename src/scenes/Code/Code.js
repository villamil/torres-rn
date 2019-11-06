import React, { useState } from "react";
import { Image, TextInput, Animated } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import Input from "../../components/input/input";

import {
  LogoContainer,
  InputContainer,
  NextContainer,
  InstructionsContainer
} from "./styles";

import theme from "../../colorTheme";

export default function Code() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");

  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={Torres}
        />
      </LogoContainer>
      <InstructionsContainer>
        <Title size="tiny" align="left">
          Completa la informacion:
        </Title>
      </InstructionsContainer>
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
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Repetir Contrasenia
        </Title>
        <Input
          value={repeatPasswordValue}
          onChangeText={text => setRepeatPasswordValue(text)}
          secureTextEntry={true}
        />
      </InputContainer>
      <NextContainer>
        <Button text="CREAR CUENTA" />
      </NextContainer>
    </Container>
  );
}
