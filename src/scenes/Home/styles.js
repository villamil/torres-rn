import styled from "styled-components";
import theme from "../../colorTheme";

export const UnitContainer = styled.View`
  height: 15%;
  justify-content: center;
`;

export const ServicesContainer = styled.View`
  margin-top: 15px;
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
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const AmountContainer = styled.View`
  align-self: flex-end;
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
  height: 50px;
`;

export const MenuContainer = styled.View`
  padding: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTouchable = styled.TouchableOpacity``;

export const ModalContainer = styled.View`
  width: 80%;
  height: 80%;
  background-color: ${theme.gray};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ModalContent = styled.View`
  flex: 1;
  width: 100%;
`;

export const CloseContainer = styled.View`
  height: 70;
  width: 40%;
  margin-left: 10;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CloseTouchable = styled.TouchableOpacity``;

export const ViewMoreContainer = styled.View`
  height: 5%;
  width: 90%;
  justify-content: flex-end;
`;
