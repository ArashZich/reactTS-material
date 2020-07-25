import * as types from "../constants/ActionTypes";

export const addBook = (text: string) => ({ type: types.ADD_TODO, text });
export const deleteBook = (id: number) => ({ type: types.DELETE_TODO, id });
export const editBook = (id: number, text: string) => ({
  type: types.EDIT_TODO,
  id,
  text,
});
export const completeBook = (id: number) => ({ type: types.COMPLETE_TODO, id });
export const completeAllBooks = () => ({ type: types.COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = (filter: any) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
