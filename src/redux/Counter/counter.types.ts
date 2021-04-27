import { decreaseCounter, increaseCounter } from "./counter.actions";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface CounterState {
  count: number;
}

export type IncreaseCounter = typeof increaseCounter;
export type DecreaseCounter = typeof decreaseCounter;