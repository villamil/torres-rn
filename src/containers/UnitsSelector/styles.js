import styled from "styled-components";
import theme from "../../colorTheme";

export const Container = styled.ScrollView`
  flex: 1;
  /* align-items: center; */
`;

export const UnitContainer = styled.TouchableOpacity`
  height: 70;
  width: 100%;
  background-color: ${theme.light};
  justify-content: center;
  /* border-radius: 180px; */
  margin-bottom: 20px;
`;
