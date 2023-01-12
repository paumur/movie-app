import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import contentReducer from '../content/reducer';
import authReducer from '../auth/reducer';

const rootReducer = combineReducers({
  content: contentReducer,
  auth: authReducer,
});

// const myMiddleware = (store) => (next) => (action) => {
//   console.log('middleware ran');
//   return next(action);
// };

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
