import { createAction, getType } from "typesafe-actions";
import * as uuid from "uuid";
import { $call } from "utility-types";

export interface UserState {
  id?: string;
  name?: string;
}

export const initialState = {};

export const userActions = {
  create: createAction("user/create", (name: string) => ({
    type: "user/create",
    name
  })),
  delete: createAction("user/delete")
};

const returnsOfActions = Object.values(userActions).map($call);
type UserAction = typeof returnsOfActions[number];

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case getType(userActions.create): {
      return {
        id: uuid.v4(),
        name: action.name
      };
    }
    case getType(userActions.delete): {
      return {};
    }
    default: {
      return state;
    }
  }
};
