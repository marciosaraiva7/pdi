import { Types } from "./types";

export function signin(name: string) {
  return {
    type: Types.SIGNIN,
    payload: {
      name,
    },
  };
}

export function signout() {
 return {
  type: Types.SIGNOUT,
 }
}
