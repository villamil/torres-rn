import React from "react";
import { Share, Button, Linking } from "react-native";

import Title from "../../components/text/Title";
import Container from "../../components/layout/Container";
import theme from "../../colorTheme";

export default function Invite() {
  async function onShare() {
    try {
      const result = await Share.share({
        message: "http://torres://hi"
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
      <Title color={theme.dark}>101A</Title>
      <Button onPress={onShare} title="Compartir" />
    </Container>
  );
}
