import { Types } from "./types";

interface StateUser {
  token: string;
}

const initialState: StateUser = {
  token: "",
};

export default function reducer(state: StateUser = initialState, action: any) {
  switch (action.type) {
    case Types.SIGNIN:
      return {
        ...state,
        token: action.payload,
      };
    case Types.SIGNOUT:
      return {
        ...state,
        token: "",
      };
    default:
      return {
        ...state,
      };
  }
}

export const username = (state: { auth: { name: string } }) => state.auth.name;
export const token = (state: { auth: { token: string } }) => state.auth.token;
