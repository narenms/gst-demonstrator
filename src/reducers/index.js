import itemReducer from './item'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  items: itemReducer
});

export default allReducers;