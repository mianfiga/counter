import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import { CounterState } from './Counter/counter.types';

export interface AppState {
  counter: CounterState;
}
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;