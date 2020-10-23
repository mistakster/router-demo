import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

const enhancedThunk = (store) => thunk.withExtraArgument({
  // no extra arguments
})(store);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => composeEnhancers(applyMiddleware(
  routerMiddleware(history),
  enhancedThunk
));
