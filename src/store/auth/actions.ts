import { Types } from "./types";

export function signin(token: string) {
  return {
    type: Types.SIGNIN,
    payload: token,
  };
}

export function signout() {
  return {
    type: Types.SIGNOUT,
  };
}
