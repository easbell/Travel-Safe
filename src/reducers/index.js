import { errorReducer } from './errorReducer';
import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  data: dataReducer
})