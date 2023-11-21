import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (import.meta.env.VITE_APP_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeEnhancers(enhancers));
const persistor = persistStore(store);

export { store, persistor };
