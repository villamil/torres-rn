import styled from "styled-components";
import theme from "../../colorTheme";

export const UnitContainer = styled.View`
  height: 15%;
  justify-content: center;
`;

export const ServicesContainer = styled.View`
  margin-top: 40px;
  width: 90%;
  flex: 1;
`;

export const ServiceItem = styled.TouchableOpacity`
  background-color: ${theme.lowDark};
  width: 100%;
  height: 40%;
  padding: 8px 10px 8px 10px;
  border-radius: 5px;
  margin-bottom: 40px;
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

export const MenuContainer = styled.View`
  padding: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTouchable = styled.TouchableOpacity``;

export const ModalContainer = styled.View`
  width: 90%;
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
  /* width: 50%; */
  /* margin-left: 20; */
  padding-right: 20;
  padding-left: 20;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CloseTouchable = styled.TouchableOpacity``;
