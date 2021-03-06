import { TodosState, TodoActionTypes, FetchTodosActionTypes } from './types';
import * as actionTypes from './types';

const initialState: TodosState = {
  todos: [],
  prevTodo: undefined,
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes | FetchTodosActionTypes
): TodosState => {
  switch (action.type) {
    case actionTypes.ADD_TODO_INIT:
      return {
        todos: [...state.todos, action.payload.todo],
        prevTodo: undefined,
        loading: false,
        error: null,
      };
    case actionTypes.ADD_TODO_SUCCESS:
      let i = 0;
      state.todos.forEach((todo, index) => {
        if (todo.id === action.payload.tempId) i = index;
      });
      const updatedTodos = [...state.todos];
      updatedTodos[i].id = action.payload.realId;
      return {
        todos: updatedTodos,
        prevTodo: undefined,
        loading: false,
        error: null,
      };
    case actionTypes.ADD_TODO_FAILURE:
      return {
        todos: [...state.todos],
        prevTodo: undefined,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.DELETE_TODO_INIT:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        prevTodo: state.todos.find(todo => todo.id === action.payload.id),
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_TODO_SUCCESS:
      return {
        todos: [...state.todos],
        prevTodo:
          state.prevTodo === undefined ? undefined : { ...state.prevTodo },
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_TODO_FAILURE:
      return {
        todos: [...state.todos],
        prevTodo:
          state.prevTodo === undefined ? undefined : { ...state.prevTodo },
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.EDIT_TODO_INIT:
      const updatedTodosAfterEdit = [...state.todos];
      updatedTodosAfterEdit.forEach(todo => {
        if (todo.id === action.payload.id) {
          todo.content = action.payload.content;
          todo.scheduled = action.payload.scheduled;
        }
      });
      return {
        todos: updatedTodosAfterEdit,
        prevTodo: undefined,
        loading: false,
        error: null,
      };
    case actionTypes.EDIT_TODO_SUCCESS:
      return {
        todos: [...state.todos],
        prevTodo: undefined,
        loading: false,
        error: null,
      };
    case actionTypes.EDIT_TODO_FAILURE:
      return {
        todos: [...state.todos],
        prevTodo: undefined,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.FETCH_TODOS_INIT:
      return {
        todos: [...state.todos],
        prevTodo: undefined,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_TODOS_SUCCESS:
      return {
        todos: [...action.payload.todos],
        prevTodo: undefined,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_TODOS_FAILURE:
      return {
        todos: [...state.todos],
        prevTodo: undefined,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
