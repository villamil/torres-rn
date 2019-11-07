import React, { useState } from "react";
import { Image, TextInput } from "react-native";
import validate from "validate.js";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Input from "../../components/input/input";
import CheckBox from "../../components/Checkbox";

import Torres from "../../assets/torres.png";
import SCREENS from "../../navigatorMap";

import theme from "../../colorTheme";

import constraints from "./constraints";

import {
  LogoContainer,
  InputContainer,
  NextContainer,
  TitleContainer,
  CheckBoxContainer
} from "./styles";

const initialState = {
  email: "asdasd@asdasd.com",
  password: "asdasds",
  rememberLogin: false,
  errors: {}
};

export default function SignIn({ navigation }) {
  const [inputFields, setInputFields] = useState(initialState);

  function onInputChange(name, value) {
    setInputFields({ ...inputFields, [name]: value });
  }

  function onSubmit() {
    const errors = validate(inputFields, constraints);
    if (errors) {
      setInputFields({ ...inputFields, errors });
    } else {
      setInputFields(initialState);
      navigation.navigate(SCREENS.HOME);
    }
  }

  function onRememberLogin() {
    setInputFields({
      ...inputFields,
      rememberLogin: !inputFields.rememberLogin
    });
  }

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
        <Input
          value={inputFields.email}
          onChangeText={text => onInputChange("email", text)}
          keyboardType="email-address"
          textContentType="emailAddress"
          errorMessage={inputFields.errors.email}
        />
      </InputContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Contrasenia
        </Title>
        <Input
          value={inputFields.password}
          onChangeText={text => onInputChange("password", text)}
          secureTextEntry={true}
          errorMessage={inputFields.errors.password}
        />
      </InputContainer>

      <CheckBoxContainer>
        <Title color={theme.green} size="tiny" style={{ marginRight: 10 }}>
          Mantener sesion
        </Title>
        <CheckBox
          style={{ alignSelf: "flex-end" }}
          onPress={onRememberLogin}
          checked={inputFields.rememberLogin}
        />
      </CheckBoxContainer>

      <NextContainer>
        <Button text="INGRESAR" onPress={onSubmit} />
      </NextContainer>
    </Container>
  );
}
