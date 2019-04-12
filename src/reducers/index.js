import { errorReducer } from './errorReducer';
import { safetyReducer } from './safetyReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  safety: safetyReducer,
  error: errorReducer
})