import { Action, createReducer, on} from "@ngrx/store";
import {increment, decrement, reset} from "./counter.actions";

type Count = number | undefined;

export const initialState: Count = 0;

// Create private reducer function
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),  // on dispatch trigger of 'increment' ('[Counter Component] Increment'), update `state`
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);

export function counterReducer(
  state: Count,
  action: Action
) {
  return _counterReducer(state, action);
}


