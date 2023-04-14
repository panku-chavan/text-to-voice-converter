import { COUNT } from "../Actions/ActionTypes";

const Initial_State = {
  counter: 0,
};

export const counterReducers = (state = Initial_State, action) => {
  switch (action.type) {
    case COUNT:
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};
