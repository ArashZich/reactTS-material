import { createSelector } from "reselect";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";

const getVisibilityFilter = (state: { visibilityFilter: any }) =>
  state.visibilityFilter;
const getTodos = (state: { todos: any }) => state.todos;

export const getVisibleBookList = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((t: { completed: any }) => t.completed);
      case SHOW_ACTIVE:
        return todos.filter((t: { completed: any }) => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getCompletedTodoCount = createSelector([getTodos], (todos) =>
  todos.reduce(
    (count: number, todo: { completed: any }) =>
      todo.completed ? count + 1 : count,
    0
  )
);
