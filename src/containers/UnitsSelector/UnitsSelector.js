import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Title from "../../components/text/Title";
import { changeUnit } from "../../store/actions/auth.action";
import theme from "../../colorTheme";

import { Container, UnitContainer } from "./styles";

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeUnit
    },
    dispatch
  );
};

function UnitsSelector(props) {
  return (
    <Container>
      {props.auth.units.map(unit => (
        <UnitContainer
          key={unit.id}
          onPress={() => {
            props.changeUnit(unit);
            props.handleCloseModal();
          }}
        >
          <Title color={theme.dark}>
            {unit.number}
            {unit.section}
          </Title>
        </UnitContainer>
      ))}
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsSelector);
