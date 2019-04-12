import { errorReducer } from './errorReducer';
import { safetyReducer } from './safetyReducer';
import { combineReducers } from 'redux';
import { vaccineReducer } from './vaccineReducer';

export const rootReducer = combineReducers({
  safety: safetyReducer,
  error: errorReducer,
  vaccines: vaccineReducer
})