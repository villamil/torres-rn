import React, { useState, useEffect } from "react";
import { Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import validate from "validate.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";
import Torres from "../../assets/torres.png";
import Input from "../../components/input/input";

import SCREENS from "../../navigatorMap";
import { LogoContainer, InputContainer, NextContainer } from "./styles";
import constraints from "./constraints";
import theme from "../../colorTheme";
import { validateCode, restoreCode } from "../../store/actions/signUpAction";

const mapStateToProps = ({ singUp, system }) => {
  return {
    singUp,
    system
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      validateCode,
      restoreCode
    },
    dispatch
  );
};

function SignUp({ navigation, validateCode, restoreCode, singUp }) {
  const [inputFields, setInputFields] = useState({ code: "abc" });
  const [codeError, setCodeError] = useState("");

  useEffect(() => {
    if (navigation.getParam("code")) {
      setInputFields({ ...inputFields, code: navigation.getParam("code") });
    }
    return () => {
      restoreCode();
    };
  }, []);

  useEffect(() => {
    if (singUp.isValidCode) {
      navigation.navigate(SCREENS.CODE);
    } else if (singUp.hasError) {
      setCodeError("El codigo no es valido.");
    }
  }, [singUp]);

  function onSubmit() {
    const error = validate(inputFields, constraints);
    if (error) {
      setCodeError(error.code);
    } else {
      validateCode(inputFields.code);
      setCodeError("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            value={inputFields.code}
            onChangeText={text => setInputFields({ code: text })}
            errorMessage={codeError}
          />
          <Title size="tiny" color={theme.light} style={{ marginTop: 10 }}>
            Para obtener tu codigo, ponte en contacto con la administracion.
          </Title>
        </InputContainer>
        <NextContainer>
          {singUp.loading ? (
            <Button text="CARGANDO..." disabled />
          ) : (
            <Button text="SIGUIENTE" onPress={onSubmit} />
          )}
        </NextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
