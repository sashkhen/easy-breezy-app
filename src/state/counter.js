import { createConsts, createActions } from '../utils/redux';

const initialState = 0;
const supportedActions = [
  'INCREMENT',
  'DECREMENT',
];

export const consts = createConsts('counter', supportedActions);
export const actions = createActions(consts);

const counter = (state = initialState, action) => {
  switch (action.type) {
    case consts.INCREMENT: return state + action.payload;
    case consts.DECREMENT: return state - action.payload;

    default: return state;
  }
};

export default counter;
