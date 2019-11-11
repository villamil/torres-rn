import React from "react";
import { Image, Switch, View } from "react-native";

import NextLogo from "../../assets/next.png";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";

import {
  BackContainer,
  UsersContainer,
  UserContainer,
  NameContainer,
  HeaderContainer,
  BackTextContainer,
  LineDivider
} from "./styles";

import theme from "../../colorTheme";

const firstName = "Luis Rafael";
const lastName = "Villamil Santa Cruz";

const swipeoutBtns = [
  {
    text: "Button"
  }
];

export default function Users({ navigation }) {
  return (
    <Container type="light">
      <BackContainer>
        <BackTextContainer onPress={() => navigation.goBack()}>
          <Image
            style={{
              height: 25,
              width: 25,
              transform: [{ rotate: "180deg" }],
              marginRight: 10
            }}
            source={NextLogo}
          />
          <Title color={theme.darkGray} size="small">
            Regresar
          </Title>
        </BackTextContainer>
      </BackContainer>
      <Title color={theme.lowDark}>Usuarios</Title>

      <HeaderContainer>
        <Title color={theme.lowDark} size="small">
          Admin.
        </Title>
      </HeaderContainer>

      <LineDivider />
      <UsersContainer>
        <UserContainer>
          <ProfileIcon firstName={firstName} lastName={lastName} size="60" />
          <NameContainer>
            <Title color={theme.dark} size="small" align="left">
              {firstName} {lastName}
            </Title>
            <Title color={theme.darkGray} size="tiny" align="left">
              villamil_50@hotmail.com
            </Title>
          </NameContainer>
          <Switch value={true} />
        </UserContainer>

        <LineDivider />
        <UserContainer>
          <ProfileIcon firstName={firstName} lastName={lastName} size="60" />
          <NameContainer>
            <Title color={theme.dark} size="small" align="left">
              {firstName} {lastName}
            </Title>
            <Title color={theme.darkGray} size="tiny" align="left">
              villamil_50@hotmail.com
            </Title>
          </NameContainer>
          <Switch />
        </UserContainer>
        <LineDivider />
      </UsersContainer>
    </Container>
  );
}
