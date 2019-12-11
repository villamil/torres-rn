import React, { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";
import validate from "validate.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import Input from "../../components/input/input";
import constraints from "./constraints";

import SCREENS from "../../navigatorMap";

import { startSignUp, restoreCode } from "../../store/actions/signUpAction";

import {
  LogoContainer,
  InputContainer,
  NextContainer,
  InstructionsContainer
} from "./styles";

import theme from "../../colorTheme";
import { signUp } from "../../store/sagas/signUp.saga";

const mapStateToProps = ({ singUp, system }) => {
  return {
    singUp,
    system
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startSignUp, restoreCode }, dispatch);
};

function Code({ singUp, startSignUp, navigation, restoreCode }) {
  const [inputFields, setInputFields] = useState({
    firstName: "Luis",
    lastName: "Villamil",
    email: "villamil_one@hotmail.com",
    password: "1234",
    repeatPassword: "1234"
  });

  useEffect(() => {
    if (singUp.signUpDone) {
      restoreCode();
      navigation.navigate(SCREENS.SIGN_IN);
    } else if (singUp.hasError) {
      setInputFields({
        ...inputFields,
        errors: { email: "Este correo ya esta registrado." }
      });
    }
  }, [singUp]);

  function onSubmit() {
    let preInputFields = inputFields;
    if (inputFields.repeatPassword !== inputFields.password) {
      delete preInputFields.repeatPassword;
    }
    let errors = validate(preInputFields, constraints);
    if (errors) {
      setInputFields({ ...inputFields, errors });
    } else {
      startSignUp({
        ...inputFields,
        code: singUp.code,
        errors: {}
      });
      setInputFields({ ...inputFields, errors: {} });
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <Container style={{ bottom: 0 }}>
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
                Nombres
              </Title>
              <Input
                value={inputFields.firstName}
                onChangeText={text =>
                  setInputFields({ ...inputFields, firstName: text })
                }
                errorMessage={
                  inputFields.errors && inputFields.errors.firstName
                }
              />
            </InputContainer>
            <InputContainer>
              <Title size="tiny" color={theme.green}>
                Apellidos
              </Title>
              <Input
                value={inputFields.lastName}
                onChangeText={text =>
                  setInputFields({ ...inputFields, lastName: text })
                }
                errorMessage={inputFields.errors && inputFields.errors.lastName}
              />
            </InputContainer>
            <InputContainer>
              <Title size="tiny" color={theme.green}>
                Correo
              </Title>
              <Input
                value={inputFields.email}
                onChangeText={text =>
                  setInputFields({ ...inputFields, email: text })
                }
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
                errorMessage={
                  inputFields.errors && inputFields.errors.repeatPassword
                }
              />
            </InputContainer>
            <NextContainer>
              {singUp.loading ? (
                <Button text="CARGANDO..." disabled />
              ) : (
                <Button text="CREAR CUENTA" onPress={onSubmit} />
              )}
            </NextContainer>
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
