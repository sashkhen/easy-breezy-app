import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../state/todoList';
import Input from '../components/Input';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <Input type="text" placeholder="next todo" onKeyDown={this.handleSubmit} />;
  }

  handleSubmit(e) {
    if (e.which !== 13) return;

    const { create } = this.props;

    if (e.target.value && create) {
      create({ text: e.target.value });
      e.target.value = null;
    }
  }
}

AddTodo.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  create: actions.create,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo);
