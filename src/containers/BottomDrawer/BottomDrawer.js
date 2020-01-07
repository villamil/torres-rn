import React, { useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import styled from "styled-components";
import { Animated, PanResponder } from "react-native";

import {
  ViewMoreContainer,
  PullBarr,
  PullMenuContainer,
  PullContainer
} from "./styles";

import Button from "../../components/button/Button";
import Title from "../../components/text/Title";
import Container from "../../components/layout/Container";

import GeneralDetails from "../../containers/GeneralDetails";

import theme from "../../colorTheme";
import SCREENS from "../../navigatorMap";

const Drawer = styled.View`
  width: 100%;
  height: ${hp(80)};
  background-color: white;
  position: absolute;
  border-radius: 10px;
`;

export default function BottomDrawer(props) {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  const currentPosition = useRef(new Animated.ValueXY(props.currentPosition));

  const onSwipeUp = () => {
    Animated.spring(currentPosition.current, {
      toValue: props.upPosition.y
    }).start();

    props.setCurrentPosition(props.upPosition);
  };

  const onSwipeDown = () => {
    Animated.spring(currentPosition.current, {
      toValue: props.downPosition.y
    }).start();

    props.setCurrentPosition(props.downPosition);
  };

  const handlePanResponderMove = React.useCallback((e, gesture) => {
    if (gesture.vy > 0 && Math.abs(gesture.vy) > config.velocityThreshold) {
      onSwipeDown();
    } else if (Math.abs(gesture.vy) > config.velocityThreshold) {
      onSwipeUp();
    }
  }, []);

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: handlePanResponderMove
      }),
    []
  );

  return (
    <Drawer
      as={Animated.View}
      style={[{ ...currentPosition.current.getLayout(), left: 0 }]}
      {...panResponder.panHandlers}
    >
      <Container type="light" radius="10px">
        <PullMenuContainer>
          <PullBarr />
        </PullMenuContainer>
        <PullContainer>
          <Title
            size="medium"
            color={theme.dark}
            opacity="0.7"
            letterSpacing="2px"
          >
            Detalles
          </Title>
        </PullContainer>
        <GeneralDetails />
        <ViewMoreContainer>
          <Button
            testID="home-see-more-btn"
            text="Ver Más"
            backgroundColor={theme.lowDark}
            onPress={() =>
              props.navigation.navigate(SCREENS.MAINTENANCE_OWED, {
                type: "all"
              })
            }
          />
        </ViewMoreContainer>
      </Container>
    </Drawer>
  );
}
