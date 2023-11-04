import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import env from 'react-dotenv';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
  env.APP_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose;

const enhancers = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeEnhancers(enhancers));

export default store;
