import { Action, createReducer, on} from "@ngrx/store";
import {increment, decrement, reset} from "./counter.actions";

export const initialState: number = 0;

// Create private reducer function
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),  // on dispatch trigger of 'increment' ('[Counter Component] Increment'), update `state`
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);

export function counterReducer(
  state: number,
  action: Action
) {
  return _counterReducer(state, action);
}


