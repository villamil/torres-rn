import React from "react";

import { ProfileContainer } from "./styles";
import Title from "../text/Title";
import theme from "../../colorTheme";

export default function ProfileIcon({ firstName = "", lastName = "" }) {
  return (
    <ProfileContainer>
      <Title color={theme.lowDark}>
        {firstName.charAt(0).toUpperCase()}
        {lastName.charAt(0).toUpperCase()}
      </Title>
    </ProfileContainer>
  );
}
