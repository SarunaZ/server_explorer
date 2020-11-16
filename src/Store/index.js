import combineReducers from './Reducers';
import thunkMiddleware  from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default function configureStore(initialState) {
  return createStore(
    combineReducers,
    initialState,
    composedEnhancer
  );
}
