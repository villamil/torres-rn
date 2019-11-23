import React from "react";
import { Image, Alert } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AuctionLogo from "../../assets/auction-dark.png";
import NextLogo from "../../assets/next.png";
import TorresLogo from "../../assets/torres-gray.png";
import PoliceLogo from "../../assets/police-dark.png";
import UsersLogo from "../../assets/users.png";
import HouseLogo from "../../assets/home.png";
import LogoutLogo from "../../assets/logout.png";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import theme from "../../colorTheme";
import SCREENS from "../../navigatorMap";

import { logout } from "../../store/actions/auth.action";

import {
  MenuContainer,
  ProfileContainer,
  NamesContainer,
  LineDivider,
  MenuItemsContainer,
  MenuItemContainer,
  ItemWrapper,
  FooterContainer
} from "./styles";

const firstName = "Luis Rafael";
const lastName = "Villamil Santa Cruz";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logout
    },
    dispatch
  );
};

function Menu(props) {
  return (
    <MenuContainer>
      <ProfileContainer>
        <ProfileIcon
          firstName={props.auth.firstName}
          lastName={props.auth.lastName}
        />
        <NamesContainer>
          <Title color={theme.lowDark} size="small" align="left">
            {props.auth.firstName} {props.auth.lastName}
          </Title>
        </NamesContainer>
        <Title size="tiny" color={theme.lowDark}>
          {props.auth.email}
        </Title>
      </ProfileContainer>
      <LineDivider />
      <MenuItemsContainer>
        <MenuItemContainer
          onPress={() => props.navigation.navigate(SCREENS.USERS)}
        >
          <ItemWrapper>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={UsersLogo}
            />
            <Title color={theme.lowDark} size="tiny">
              Usuarios
            </Title>
          </ItemWrapper>
          <Image style={{ height: 15, width: 15 }} source={NextLogo} />
        </MenuItemContainer>

        <MenuItemContainer
          onPress={() => {
            props.navigation.goBack();
            props.navigation.navigate(SCREENS.HOME, { unitPopUp: true });
          }}
        >
          <ItemWrapper>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={HouseLogo}
            />
            <Title color={theme.lowDark} size="tiny">
              Departamentos
            </Title>
          </ItemWrapper>
          <Image style={{ height: 15, width: 15 }} source={NextLogo} />
        </MenuItemContainer>

        <MenuItemContainer
          onPress={() =>
            Alert.alert(
              "Muy pronto!",
              "Estamos mejorando la aplicacion constantemente."
            )
          }
        >
          <ItemWrapper>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={AuctionLogo}
            />
            <Title color={theme.lowDark} size="tiny">
              Reglamento
            </Title>
          </ItemWrapper>
          <Image style={{ height: 15, width: 15 }} source={NextLogo} />
        </MenuItemContainer>

        <MenuItemContainer
          onPress={() =>
            Alert.alert(
              "Muy pronto!",
              "Estamos mejorando la aplicacion constantemente."
            )
          }
        >
          <ItemWrapper>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={PoliceLogo}
            />
            <Title color={theme.lowDark} size="tiny">
              Caseta
            </Title>
          </ItemWrapper>
          <Image style={{ height: 15, width: 15 }} source={NextLogo} />
        </MenuItemContainer>

        <MenuItemContainer
          onPress={() => {
            props.logout();
            props.navigation.navigate(SCREENS.SIGN_IN);
          }}
        >
          <ItemWrapper>
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={LogoutLogo}
            />
            <Title color={theme.lowDark} size="tiny">
              Cerrar sesion
            </Title>
          </ItemWrapper>
        </MenuItemContainer>
      </MenuItemsContainer>
      <LineDivider />
      <FooterContainer>
        <Image style={{ height: 25, width: 25 }} source={TorresLogo} />
        <Title color={theme.darkGray} size="tiny">
          Torres - V1.0.0
        </Title>
      </FooterContainer>
    </MenuContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
