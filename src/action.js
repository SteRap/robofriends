import { CHANGE_SEARCH_FIELD } from "./constant";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, //costant ergo is capitalized!
  payload: text,
});
