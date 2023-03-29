import { Types } from "./types";

interface StateUser {
  spotifyToken: string;
}

const initialState: StateUser = {
  spotifyToken: "",
};

export default function reducer(state: StateUser = initialState, action: any) {
  switch (action.type) {
    case Types.SAVETOKEN:
      return {
        ...state,
        spotifyToken: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export const spotifyToken = (state: { music: { spotifyToken: string } }) =>
  state.music.spotifyToken;
