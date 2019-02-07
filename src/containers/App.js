import React, { Fragment } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>Easy Breezy App</h2>
        <Counter />
        <TodoList />
      </Fragment>
    );
  }
}
