import store from './store';

export type { AppState } from  './rootReducer';

export interface Action {
  type: string,
  payload?: any,
  error?: boolean,
  meta?: any,
};

export type AppDispatch = typeof store.dispatch