import React, { useState, useEffect } from "react";
import { Image, TextInput, Animated } from "react-native";
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
import { validateCode } from "../../store/actions/signUpAction";

const mapStateToProps = ({ singUp }) => {
  return {
    singUp
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      validateCode
    },
    dispatch
  );
};

function SignUp({ navigation, validateCode }) {
  const [inputFields, setInputFields] = useState({});
  const [codeError, setCodeError] = useState("");

  useEffect(() => {
    if (navigation.getParam("code")) {
      setInputFields({ ...inputFields, code: navigation.getParam("code") });
    }
  }, []);

  function onSubmit() {
    const error = validate(inputFields, constraints);
    if (error) {
      setCodeError(error.code);
    } else {
      validateCode(inputFields.code);
      navigation.navigate(SCREENS.CODE);
      setCodeError("");
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
        <Button text="SIGUIENTE" onPress={onSubmit} />
      </NextContainer>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
