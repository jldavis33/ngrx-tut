import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

export const initialState = 0;

// Create private reducer function
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),  // on dispatch trigger of 'increment' ('[Counter Component] Increment'), update `state`
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


