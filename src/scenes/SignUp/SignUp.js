import React, { useState } from "react";
import { Image, TextInput, Animated } from "react-native";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import Input from "../../components/input/input";

import SCREENS from "../../navigatorMap";
import { LogoContainer, InputContainer, NextContainer } from "./styles";

import theme from "../../colorTheme";

export default function SignUp({ navigation }) {
  const [codeValue, setCodeValue] = useState("");
  return (
    <Container>
      <LogoContainer>
        <Image
          style={{ width: 50, height: 50, marginRight: 10 }}
          source={Torres}
        />
      </LogoContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Codigo
        </Title>
        <Input
          textAlign="center"
          value={codeValue}
          onChangeText={text => setCodeValue(text)}
        />
        <Title size="tiny" color={theme.light} style={{ marginTop: 10 }}>
          Para obtener tu codigo, ponte en contacto con la administracion.
        </Title>
      </InputContainer>
      <NextContainer>
        <Button
          text="SIGUIENTE"
          onPress={() => navigation.navigate(SCREENS.CODE)}
        />
      </NextContainer>
    </Container>
  );
}
