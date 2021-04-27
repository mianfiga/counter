import React from 'react';
import { AppState, AppDispatch } from './redux/types';

import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";
import { DecreaseCounter, IncreaseCounter } from './redux/Counter/counter.types';


type StateProps = {
  count: number;
};

type OwnProps = {
};

type DispatchProps = {
  increaseCounter: IncreaseCounter;
  decreaseCounter: DecreaseCounter;
};

type Props = StateProps & DispatchProps & OwnProps;


const App: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <div>Count: 0</div>
      <button onClick={props.increaseCounter}>Increase Count</button>
      <button>Decrease Count</button>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    count: state.counter.count,
  }
}

// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

const mapDispatchToProps = {
  increaseCounter: increaseCounter,
  decreaseCounter: decreaseCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
