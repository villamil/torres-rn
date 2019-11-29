import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Title from "../../components/text/Title";

import { changeUnit } from "../../store/actions/auth.action";
import { getUnitList } from "../../store/actions/unit.action";

import theme from "../../colorTheme";

import { Container, UnitContainer } from "./styles";

const mapStateToProps = ({ auth, userUnit }) => ({ auth, userUnit });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeUnit,
      getUnitList
    },
    dispatch
  );
};

function UnitsSelector(props) {
  useEffect(() => {
    props.getUnitList(props.auth.userId);
  }, []);
  return (
    <Container>
      {props.userUnit.data
        ? Object.values(props.userUnit.data).map(unit => (
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
          ))
        : null}
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsSelector);
