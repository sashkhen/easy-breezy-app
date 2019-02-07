import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actions, todoListSelector } from '../state/todoList';
import AddTodo from './AddTodo';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 10px 0;
  padding: 10px 0;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  padding: 0;
`;

const Item = styled.li`
  display: block;
  padding: 0 20px;

  cursor: pointer;
`;


class TodoList extends Component {
  render() {
    const { list, remove } = this.props;

    return (
      <Wrapper>
        <h4>#TODO:</h4>
        <AddTodo />
        <List>
          {list.map(item => (
            <Item key={item.id} onClick={() => remove(item.id)}>🙀 {item.text}</Item>
          ))}
        </List>
      </Wrapper>
    );
  }
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  remove: PropTypes.func,
};

const mapStateToProps = state => ({
  list: todoListSelector(state),
});

const mapDispatchToProps = {
  remove: actions.delete,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
