import { createStore } from 'redux';
import reducers from './_reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);

export default store;
