import omit from 'lodash/omit';
import Store from 'electron-store';
import { createConsts, createActions } from '../utils/redux';
import createUid from '../utils/uid';


const DATA_KEY = 'todos';
const data = new Store({ name: 'Todo List' });
// const initialState = JSON.parse(window.localStorage.getItem('todoList')) || {};
const initialState = data.get(DATA_KEY) || {};
const supportedActions = [
  'CREATE',
  'UPDATE',
  'DELETE',
];

export const consts = createConsts('todoList', supportedActions);
export const actions = createActions(consts);

const createTodo = (state, payload) => {
  const id = createUid();
  const newState = Object.assign({}, state, {
    [id]: Object.assign({}, payload, { id }),
  });

  // window.localStorage.setItem('todoList', JSON.stringify(newState));
  data.set(DATA_KEY, newState);

  return newState;
};

const updateTodo = (state, payload) => {
  const newState = Object.assign({}, state, {
    [payload.id]: Object.assign({}, state[payload.id], payload),
  });

  // window.localStorage.setItem('todoList', JSON.stringify(newState));
  data.set(DATA_KEY, newState);

  return newState;
};


const deleteTodo = (state, id) => {
  const newState = omit(state, [id]);

  // window.localStorage.setItem('todoList', JSON.stringify(newState));
  data.set(DATA_KEY, newState);

  return newState;
};

const counter = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case consts.CREATE: return createTodo(state, payload);
    case consts.UPDATE: return updateTodo(state, payload);
    case consts.DELETE: return deleteTodo(state, payload);

    default: return state;
  }
};

export default counter;


// selectors

export const todosSelector = state => state.todoList;
export const todoListSelector = (state) => {
  const todos = todosSelector(state);

  return Object.keys(todos).map(key => todos[key]);
};
