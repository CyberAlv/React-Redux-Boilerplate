// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, ADDBY } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return state = 0;
    case ADDBY:
      return state + 5;
    default:
      return state;
  }
};
