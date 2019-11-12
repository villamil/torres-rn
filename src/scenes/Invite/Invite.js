import React, { useState } from "react";
import { Share, Linking, Image } from "react-native";

import Title from "../../components/text/Title";
import Container from "../../components/layout/Container";
import Button from "../../components/button/Button";
import CheckBox from "../../components/Checkbox";
import Input from "../../components/input/input";

import TorresLogo from "../../assets/torres-gray.png";
import NextLogo from "../../assets/next.png";

import theme from "../../colorTheme";

import {
  LogoContainer,
  UnitContainer,
  ActionContainer,
  CheckBoxContainer,
  CodeContainer,
  BackContainer
} from "./styles";

export default function Invite({ navigation }) {
  const [isOwner, setOwner] = useState(false);
  const [code, setCode] = useState("SJDW-DWJE-ADWW");

  async function onShare() {
    try {
      const result = await Share.share({
        message: `https://villamil.github.io/torres-link?code=${code}`
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container type="light">
      <BackContainer onPress={() => navigation.goBack()}>
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
          Regresar
        </Title>
      </BackContainer>
      <LogoContainer>
        <Image style={{ height: 50, width: 50 }} source={TorresLogo} />
      </LogoContainer>
      <UnitContainer>
        <Title color={theme.dark} size="large">
          101A
        </Title>
        <Title color={theme.darkGray} size="small">
          Comparte este codigo para invitar a alguien a este departamento!
        </Title>
      </UnitContainer>
      <CodeContainer>
        <Input
          backgroundColor={theme.darkGray}
          enabled={false}
          textAlign="center"
          value={code}
        />
      </CodeContainer>
      <ActionContainer>
        <Button
          backgroundColor={theme.lowDark}
          onPress={onShare}
          text="Compartir"
        />
      </ActionContainer>
    </Container>
  );
}
