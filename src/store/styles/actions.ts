import { Types } from "./types";

export function switchTheme(theme: string) {
  return {
    type: Types.TOGGLETHEME,
    payload: theme,
  };
}
