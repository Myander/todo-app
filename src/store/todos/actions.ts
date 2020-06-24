import * as actionTypes from './types';
import { TodoActionTypes, FetchTodosActionTypes, Todo } from './types';

export const addTodo = (
  content: string,
  scheduled: string | null,
  userId: string
): TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      content,
      scheduled,
      userId,
    },
  };
};

export const addTodoInit = (todo: Todo): TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO_INIT,
    payload: {
      todo,
    },
  };
};

export const addTodoSuccess = (
  tempId: string,
  realId: string
): TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: {
      tempId,
      realId,
    },
  };
};

export const addTodoFailure = (error: string): TodoActionTypes => {
  return {
    type: actionTypes.ADD_TODO_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteTodo = (id: string): TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id,
    },
  };
};
export const deleteTodoInit = (id: string): TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO_INIT,
    payload: {
      id,
    },
  };
};
export const deleteTodoSuccess = (): TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
  };
};
export const deleteTodoFailure = (error: string): TodoActionTypes => {
  return {
    type: actionTypes.DELETE_TODO_FAILURE,
    payload: {
      error,
    },
  };
};

export const editTodo = (id: string, content: string): TodoActionTypes => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: {
      id,
      content,
    },
  };
};
export const editTodoInit = (id: string, content: string): TodoActionTypes => {
  return {
    type: actionTypes.EDIT_TODO_INIT,
    payload: {
      id,
      content,
    },
  };
};
export const editTodoSuccess = (): TodoActionTypes => {
  return {
    type: actionTypes.EDIT_TODO_SUCCESS,
  };
};
export const editTodoFailure = (error: string): TodoActionTypes => {
  return {
    type: actionTypes.EDIT_TODO_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchTodos = (): FetchTodosActionTypes => {
  return {
    type: actionTypes.FETCH_TODOS,
  };
};
export const fetchTodosInit = (): FetchTodosActionTypes => {
  return {
    type: actionTypes.FETCH_TODOS_INIT,
  };
};
export const fetchTodosSuccess = (todos: Todo[]): FetchTodosActionTypes => {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
};
export const fetchTodosFailure = (error: string): FetchTodosActionTypes => {
  return {
    type: actionTypes.FETCH_TODOS_FAILURE,
    payload: {
      error,
    },
  };
};
