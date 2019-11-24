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
  function onDelete(user) {
    Alert.alert(
      `Eliminar a ${user.firstName} ${user.lastName}`,
      "Seguro que quiere eliminar a este usuario?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => props.deleteUser(user.id, props.auth.defaultUnitId)
        }
      ],
      { cancelable: false }
    );
  }

  function onAdminChange(user) {
    const isAdmin =
      props.unit.data.owners.filter(item => item.id === user.id).length >= 1;
    console.log("-------------CHANGE -------------------");
    props.changeUserPermision(user.id, props.auth.defaultUnitId, !isAdmin);
  }

  function renderUsers() {
    const users = [
      ...props.unit.data.owners
        .filter(item => item.id !== props.auth.userId)
        .map(item => ({ ...item, isOwner: true })),
      ...props.unit.data.tenants
        .filter(item => item.id !== props.auth.userId)
        .map(item => ({ ...item, isOwner: false }))
    ].sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });

    return users.map(user => {
      console.log("-------division --------------");
      console.log(user.firstName, user.isOwner);
      return (
        <UserContainer key={user.id}>
          <DeleteContainer onPress={() => onDelete(user)}>
            <Image style={{ width: 20, height: 20 }} source={DeleteLogo} />
          </DeleteContainer>

          <NameContainer>
            <Title color={theme.dark} size="small" align="left">
              {user.firstName} {user.lastName}
            </Title>
            <Title color={theme.darkGray} size="tiny" align="left">
              {user.email}
            </Title>
          </NameContainer>
          <CheckBox
            checked={user.isOwner}
            onPress={() => onAdminChange(user)}
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
