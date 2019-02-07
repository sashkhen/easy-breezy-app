import omit from 'lodash/omit';
import { createConsts, createActions } from '../utils/redux';
import createUid from '../utils/uid';

const initialState = {};
const supportedActions = [
  'CREATE',
  'UPDATE',
  'DELETE',
];

export const consts = createConsts('todoList', supportedActions);
export const actions = createActions(consts);

const createTodo = (state, payload) => {
  const id = createUid();

  return Object.assign({}, state, {
    [id]: Object.assign({}, payload, { id }),
  });
};

const updateTodo = (state, payload) =>
  Object.assign({}, state, {
    [payload.id]: Object.assign({}, state[payload.id], payload),
  });

const deleteTodo = (state, id) => omit(state, [id]);

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
