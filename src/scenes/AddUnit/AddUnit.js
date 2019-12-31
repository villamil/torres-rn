import React, { useState, useEffect } from "react";
import { Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import validate from "validate.js";

import constraints from "./constraints";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";

import NextLogo from "../../assets/next.png";
import TorresLogo from "../../assets/torres-gray.png";

import { addUnit } from "../../store/actions/unit.action";

import theme from "../../colorTheme";
import SCREENS from "../../navigatorMap";

import {
  BackContainer,
  BackTextContainer,
  LogoContainer,
  CodeContainer,
  ActionContainer
} from "./styles";

const mapStateToProps = ({ unit, auth }) => ({ unit, auth });
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addUnit
    },
    dispatch
  );
};

function AddUnit(props) {
  const [inputFields, setInputFields] = useState({ code: "" });
  const [codeError, setCodeError] = useState("");

  useEffect(() => {
    if (props.navigation.getParam("code")) {
      setInputFields({ code: props.navigation.getParam("code") });
    }
  }, []);

  useEffect(() => {
    if (props.unit.unitAdded) {
      props.navigation.navigate(SCREENS.HOME);
    }
  }, [props.unit]);

  function onSubmit() {
    const error = validate(inputFields, constraints);
    if (error) {
      setCodeError(error.code);
    } else {
      props.addUnit(props.auth.userId, inputFields.code);
      setCodeError("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container type="light">
        <BackContainer>
          <BackTextContainer onPress={() => props.navigation.goBack()}>
            <Image
              style={{
                height: 25,
                width: 25,
                transform: [{ rotate: "180deg" }],
                marginRight: 10
              }}
              source={NextLogo}
            />
            <Title color={theme.dark} size="small">
              Departamento
            </Title>
          </BackTextContainer>
        </BackContainer>
        <LogoContainer>
          <Image style={{ height: 50, width: 50 }} source={TorresLogo} />
        </LogoContainer>
        <CodeContainer>
          <Title color={theme.dark} size="tiny">
            Código
          </Title>
          <Input
            backgroundColor={theme.darkGray}
            textAlign="center"
            onChangeText={text => setInputFields({ code: text })}
            value={inputFields.code.toUpperCase()}
            errorMessage={codeError}
          />
        </CodeContainer>
        <ActionContainer>
          <Button
            backgroundColor={theme.lowDark}
            onPress={onSubmit}
            text="AGREGAR"
          />
        </ActionContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUnit);
