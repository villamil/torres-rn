import React from "react";

import Container from "../../components/layout/Container";
import Title from "../../components/text/Title";
import Button from "../../components/button/Button";

export default function Rules({ navigation }) {
  return (
    <Container type="light">
      <Button text="Home" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
}

Rules.navigationOptions = {
  drawerLabel: "Reglamento"
};
