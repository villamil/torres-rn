import React, { useState } from "react";
import { Image, Switch, Alert, TouchableWithoutFeedback } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NextLogo from "../../assets/next.png";
import DeleteLogo from "../../assets/cross.png";
import InviteLogo from "../../assets/send.png";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import CheckBox from "../../components/Checkbox";

import {
  deleteUser,
  changeUserPermision
} from "../../store/actions/unit.action";

import SCREENS from "../../navigatorMap";

import {
  BackContainer,
  UsersContainer,
  UserContainer,
  NameContainer,
  HeaderContainer,
  BackTextContainer,
  InviteContainer,
  DeleteContainer
} from "./styles";

import theme from "../../colorTheme";

const swipeoutBtns = [
  {
    text: "Button"
  }
];

const mapStateToProps = ({ unit, auth }) => ({
  unit,
  auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteUser, changeUserPermision }, dispatch);
};

function Users(props) {
  function onDelete(userUnit) {
    Alert.alert(
      `Eliminar a ${userUnit.user.firstName} ${userUnit.user.lastName}`,
      "Seguro que quiere eliminar a este usuario?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => props.deleteUser(userUnit.id)
        }
      ],
      { cancelable: false }
    );
  }

  function onAdminChange(userUnit) {
    props.changeUserPermision(userUnit.id, !userUnit.isOwner);
  }

  function renderUsers() {
    return props.unit.data.userUnit
      .filter(item => item.user.id !== props.auth.userId)
      .map(item => {
        return (
          <UserContainer key={item.user.id}>
            <DeleteContainer onPress={() => onDelete(item)}>
              <Image style={{ width: 20, height: 20 }} source={DeleteLogo} />
            </DeleteContainer>

            <NameContainer>
              <Title color={theme.dark} size="small" align="left">
                {item.user.firstName} {item.user.lastName}
              </Title>
              <Title color={theme.darkGray} size="tiny" align="left">
                {item.user.email}
              </Title>
            </NameContainer>
            <CheckBox
              checked={item.isOwner}
              onPress={() => onAdminChange(item)}
              backgroundColor={theme.white}
            />
          </UserContainer>
        );
      });
  }

  return (
    <Container type="gray">
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
            Usuarios
          </Title>
        </BackTextContainer>
        <InviteContainer
          onPress={() => props.navigation.navigate(SCREENS.INVITE)}
        >
          <Title color={theme.dark} size="small">
            Invitar
          </Title>
          <Image style={{ height: 25, width: 25 }} source={InviteLogo} />
        </InviteContainer>
      </BackContainer>

      <HeaderContainer>
        <Title color={theme.lowDark} size="small">
          Admin.
        </Title>
      </HeaderContainer>

      <UsersContainer>{renderUsers()}</UsersContainer>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
