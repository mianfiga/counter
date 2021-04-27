import { INCREMENT, DECREMENT, CounterState } from './counter.types';
import { Action } from '../types';

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: Action): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state, count: state.count - 1,
      };
    default: return state;
  }
};
export default reducer;