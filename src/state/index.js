import { legacy_createStore as createStore, combineReducers } from 'redux';
import contentReducer from '../content/reducer';
import authReducer from '../auth/reducer';

const rootReducer = combineReducers({
  content: contentReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
