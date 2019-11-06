import styled from "styled-components";
import theme from "../../colorTheme";

export const UnitContainer = styled.View`
  height: 20%;
  justify-content: center;
`;

export const ServicesContainer = styled.View`
  width: 90%;
  flex: 1;
`;

export const ServiceItem = styled.View`
  background-color: ${theme.lowDark};
  width: 100%;
  height: 20%;
  padding: 8px 10px 8px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ServiceTitleContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SummaryContainer = styled.View``;

export const PullBarr = styled.View`
  border-bottom-color: ${theme.dark};
  border-bottom-width: 5px;
  border-radius: 2px;
  opacity: 0.3;
  width: 8%;
`;

export const PullMenuContainer = styled.View`
  padding-top: 2%;
  width: 100%;
  align-items: center;
`;

export const PullContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
`;

export const MenuContainer = styled.View`
  padding: 20px;
  align-self: flex-start;
`;
