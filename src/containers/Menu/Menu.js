import React from "react";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import theme from "../../colorTheme";

import {
  MenuContainer,
  ProfileContainer,
  NamesContainer,
  LineDivider
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
    </MenuContainer>
  );
}
