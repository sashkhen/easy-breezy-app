import React, { Fragment } from 'react';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <TodoList />
      </Fragment>
    );
  }
}
