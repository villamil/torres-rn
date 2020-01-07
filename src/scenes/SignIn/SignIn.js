import React, { useState, useEffect } from "react";
import {
  Image,
  BackHandler,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import validate from "validate.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Input from "../../components/input/input";
import CheckBox from "../../components/Checkbox";
import AuthCheck from "../../components/AuthCheck";

import {
  authenticate,
  rememberSesion,
  logout
} from "../../store/actions/auth.action";

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
  email: "villamil_one@hotmail.com",
  password: "1234",
  rememberLogin: false,
  errors: {}
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ authenticate, rememberSesion, logout }, dispatch);
};

function SignIn({ navigation, authenticate, auth, rememberSesion, logout }) {
  const [inputFields, setInputFields] = useState(initialState);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.navigate(SCREENS.LANDING);
        return true;
      }
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    if (auth.logged) {
      navigation.navigate(SCREENS.HOME);
    }
  }, [auth.logged]);

  function onInputChange(name, value) {
    setInputFields({ ...inputFields, [name]: value });
  }

  function onSubmit() {
    const errors = validate(inputFields, constraints);
    if (errors) {
      setInputFields({ ...inputFields, errors });
    } else {
      setInputFields(initialState);
      authenticate({
        rememberSesion: auth.rememberSesion,
        email: inputFields.email,
        password: inputFields.password
      });
    }
  }

  function onRememberLogin() {
    rememberSesion(!auth.rememberSesion);
  }

  return (
    <TouchableWithoutFeedback
      testID="sign-in-click-outside"
      onPress={Keyboard.dismiss}
    >
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
            testID="sign-in-email"
            value={inputFields.email}
            onChangeText={text => onInputChange("email", text)}
            keyboardType="email-address"
            textContentType="emailAddress"
            errorMessage={inputFields.errors.email}
          />
        </InputContainer>
        <InputContainer>
          <Title size="tiny" color={theme.green}>
            Contraseña
          </Title>
          <Input
            testID="sign-in-password"
            value={inputFields.password}
            onChangeText={text => onInputChange("password", text)}
            secureTextEntry={true}
            errorMessage={inputFields.errors.password}
          />
        </InputContainer>

        <CheckBoxContainer>
          <Title color={theme.green} size="tiny" style={{ marginRight: 10 }}>
            Mantener sesión
          </Title>
          <CheckBox
            testID="sign-in-maintain-session-btn"
            style={{ alignSelf: "flex-end" }}
            onPress={onRememberLogin}
            checked={auth.rememberSesion}
          />
        </CheckBoxContainer>

        <NextContainer>
          {auth.loading ? (
            <Button text="CARGANDO..." disabled />
          ) : (
            <Button
              testID="sign-in-submit"
              text="INGRESAR"
              onPress={onSubmit}
            />
          )}
        </NextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
