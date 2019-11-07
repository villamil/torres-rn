import React from "react";
import { Image } from "react-native";

import AuctionLogo from "../../assets/auction-dark.png";
import NextLogo from "../../assets/next.png";
import TorresLogo from "../../assets/torres-gray.png";
import PoliceLogo from "../../assets/police-dark.png";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import theme from "../../colorTheme";

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

export default function Menu() {
  return (
    <MenuContainer>
      <ProfileContainer>
        <ProfileIcon firstName={firstName} lastName={lastName} />
        <NamesContainer>
          <Title color={theme.lowDark} size="small" align="left">
            {firstName} {lastName}
          </Title>
        </NamesContainer>
        <Title size="tiny" color={theme.lowDark}>
          villamil_50@hotmail.com
        </Title>
      </ProfileContainer>
      <LineDivider />
      <MenuItemsContainer>
        <MenuItemContainer>
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

        <MenuItemContainer>
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
