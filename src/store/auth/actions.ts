import { Types } from "./types";

export function signin() {
  return {
    type: Types.SIGNIN,
  };
}

export function signout() {
 return {
  type: Types.SIGNOUT,
 }
}
