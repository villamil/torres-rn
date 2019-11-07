import React, { useState } from "react";
import { Image, TextInput, Animated } from "react-native";
import validate from "validate.js";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import Input from "../../components/input/input";
import constraints from "./constraints";

import {
  LogoContainer,
  InputContainer,
  NextContainer,
  InstructionsContainer
} from "./styles";

import theme from "../../colorTheme";

export default function Code() {
  const [inputFields, setInputFields] = useState({});

  function onSubmit() {
    let preInputFields = inputFields;
    if (inputFields.repeatPassword !== inputFields.password) {
      delete preInputFields.repeatPassword;
    }
    let errors = validate(preInputFields, constraints);
    if (errors) {
      setInputFields({ ...inputFields, errors });
    } else {
      setInputFields({ ...inputFields, errors: {} });
      console.log("CREATE ACCOUNT!!!!");
    }
  }

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
        <Input
          value={inputFields.email}
          onChangeText={text => setInputFields({ ...inputFields, email: text })}
          keyboardType="email-address"
          textContentType="emailAddress"
          errorMessage={inputFields.errors && inputFields.errors.email}
        />
      </InputContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Contrasenia
        </Title>
        <Input
          value={inputFields.password}
          onChangeText={text =>
            setInputFields({ ...inputFields, password: text })
          }
          secureTextEntry={true}
          errorMessage={inputFields.errors && inputFields.errors.password}
        />
      </InputContainer>
      <InputContainer>
        <Title size="tiny" color={theme.green}>
          Repetir Contrasenia
        </Title>
        <Input
          value={inputFields.repeatPassword}
          onChangeText={text =>
            setInputFields({ ...inputFields, repeatPassword: text })
          }
          secureTextEntry={true}
          errorMessage={inputFields.errors && inputFields.errors.repeatPassword}
        />
      </InputContainer>
      <NextContainer>
        <Button text="CREAR CUENTA" onPress={onSubmit} />
      </NextContainer>
    </Container>
  );
}
