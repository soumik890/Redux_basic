import {Add, Substract} from './actiontype';

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add:
      //   console.log(state.counter);
      return {...state, counter: state.counter + 1};
    case Substract:
      //   console.log(state.counter);
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
};
