import {Action} from "redux";

const CirquitActionType = '@cirquit/action';

export interface CirquitReducer<State> {
  (state: State): State;
}

export interface CirquitAction<State> extends Action {
  type: typeof CirquitActionType;
  name: string;
  reducer: CirquitReducer<State>;
}

export const cirquit = <State>(reducer: CirquitReducer<State>): CirquitAction<State> => ({
  type: CirquitActionType,
  name: reducer.name,
  reducer
});

export const createCirquitReducer = <State>(
  initialState: State
) => (
  state: State = initialState,
  action: CirquitAction<State>
): State => {
  switch (action.type) {
    case CirquitActionType: {
      return action.reducer(state);
    }
    default: {
      return state;
    }
  }
}
