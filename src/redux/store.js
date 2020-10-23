import { createStore } from 'redux';
import createEnhancer from './middleware/index';
import createReducer from './reducers/index';
import history from './history';

const store = createStore(
  createReducer(history),
  createEnhancer(history)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
