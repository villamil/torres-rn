import styled from "styled-components";
import theme from "../../colorTheme";

const backgroundColors = {
  light: theme.light,
  dark: theme.dark,
  gray: theme.gray,
  darkGray: theme.darkGray
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ type }) => {
    return backgroundColors[type] || theme.dark;
  }};
  border-radius: ${({ radius }) => {
    return radius || 0;
  }};
`;

const StyledContainer = styled(Container)``;

export default StyledContainer;
