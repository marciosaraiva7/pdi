import { Types } from "./types";

interface StateUser {
  name: string;
  isLogged: boolean;
}

const initialState: StateUser = {
  name: "",
  isLogged: false,
};

export default function reducer(state: StateUser = initialState, action: any) {
  switch (action.type) {
    case Types.SIGNIN:
      return {
        ...state,
        name: action.payload.name,
        isLogged: true,
      };
    case Types.SIGNOUT:
      return {
        ...state,
        name: "",
        isLogged: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export const username = (state: { auth: { name: string } }) => state.auth.name;
export const isLogged = (state: { auth: {isLogged: boolean }}) => state.auth.isLogged;

