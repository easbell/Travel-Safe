import { errorReducer } from './errorReducer';
import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { saveReducer } from './saveReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  data: dataReducer,
  saved: saveReducer
})