import { COUNT } from "./ActionTypes";

export const handleCount = (data) => {
  return {
    type: COUNT,
    payload: data,
  };
};
