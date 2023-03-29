import { Types } from "./types";

export function saveToken(spotifyToken: string) {
  return {
    type: Types.SAVETOKEN,
    payload: spotifyToken,
  };
}
