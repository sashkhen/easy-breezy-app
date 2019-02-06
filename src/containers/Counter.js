import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../state/counter';
import Button from '../components/Button';

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr auto auto;
`;

class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Grid>
        <span>Current State: {counter}</span>
        <Button onClick={() => increment(1)}>Increment</Button>
        <Button onClick={() => decrement(1)}>Decrement</Button>
      </Grid>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment: actions.increment,
  decrement: actions.decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
