import { Types } from "./types";

interface StateUser {
  theme: string;
}

const initialState: StateUser = {
  theme: "light",
};

export default function reducer(state: StateUser = initialState, action: any) {
  switch (action.type) {
    case Types.TOGGLETHEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export const theme = (state: { styles: { theme: string } }) => state.styles.theme;
