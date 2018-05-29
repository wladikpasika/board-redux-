import {
    SET_SEARCH_VALUE,
    CLEAR_SEARCH_VALUE,
 } from '../actionsTypes';

export const setSearchValue = (searchValue) => {
    return { type: SET_SEARCH_VALUE, searchValue }
  };

export const clearSearchValue = () => {
    return { type: CLEAR_SEARCH_VALUE }
  };