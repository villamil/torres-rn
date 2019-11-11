import React from "react";

import { ProfileContainer } from "./styles";
import Title from "../text/Title";
import theme from "../../colorTheme";

export default function ProfileIcon({ firstName = "", lastName = "", size }) {
  return (
    <ProfileContainer size={size}>
      <Title color={theme.lowDark}>
        {firstName.charAt(0).toUpperCase()}
        {lastName.charAt(0).toUpperCase()}
      </Title>
    </ProfileContainer>
  );
}
