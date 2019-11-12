import React from "react";
import { Image, Switch, Alert } from "react-native";

import NextLogo from "../../assets/next.png";
import DeleteLogo from "../../assets/cross.png";

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
  LineDivider,
  DeleteContainer
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
  function onDelete() {
    Alert.alert(
      "Eliminar a Luis Villamil",
      "Seguro que quiere eliminar a este usuario?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  return (
    <Container type="gray">
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
          <Title color={theme.dark} size="small">
            Usuarios
          </Title>
        </BackTextContainer>
      </BackContainer>

      <HeaderContainer>
        <Title color={theme.lowDark} size="small">
          Admin.
        </Title>
      </HeaderContainer>

      <UsersContainer>
        <UserContainer>
          <DeleteContainer onPress={onDelete}>
            <Image style={{ width: 20, height: 20 }} source={DeleteLogo} />
          </DeleteContainer>
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

        <UserContainer>
          <DeleteContainer onPress={onDelete}>
            <Image style={{ width: 20, height: 20 }} source={DeleteLogo} />
          </DeleteContainer>
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
      </UsersContainer>
    </Container>
  );
}
