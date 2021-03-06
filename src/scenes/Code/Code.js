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
  const [inputFields, setInputFields] = useState({});

  useEffect(() => {
    if (singUp.signUpDone) {
      restoreCode();
      navigation.navigate(SCREENS.SIGN_IN);
    } else if (singUp.hasErrorForm) {
      setInputFields({
        ...inputFields,
        errors: { email: "Este correo ya está registrado." }
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
    <KeyboardAvoidingView testID="code-form-click-outside" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          testID="code-form-scrollview"
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
                Completa la información:
              </Title>
            </InstructionsContainer>
            <InputContainer>
              <Title size="tiny" color={theme.green}>
                Nombres
              </Title>
              <Input
                testID="code-form-first-name"
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
                testID="code-form-last-name"
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
                testID="code-form-email"
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
                Contraseña
              </Title>
              <Input
                testID="code-form-password"
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
                Repetir Contraseña
              </Title>
              <Input
                testID="code-form-password-repeat"
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
                <Button
                  testID="code-form-submit"
                  text="CREAR CUENTA"
                  onPress={onSubmit}
                />
              )}
            </NextContainer>
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
