export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_INIT = 'ADD_TODO_INIT';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_INIT = 'DELETE_TODO_INIT';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TODO_INIT = 'EDIT_TODO_INIT';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'EDIT_TODO_FAILURE';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_INIT = 'FETCH_TODOS_INIT';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

// state
export interface Todo {
  createdAt: string;
  content: string;
  scheduled: string | null;
  projectId: string | null;
  userId: string;
  id: string;
}

export interface TodosState {
  todos: Todo[];
  prevTodo: Todo | undefined;
  loading: boolean;
  error: string | null;
}

// action types

export interface AddTodo {
  type: typeof ADD_TODO;
  payload: {
    content: string;
    scheduled: string | null;
    userId: string;
  };
}

export interface AddTodoInit {
  type: typeof ADD_TODO_INIT;
  payload: {
    todo: Todo;
  };
}

export interface AddTodoSuccess {
  type: typeof ADD_TODO_SUCCESS;
  payload: {
    tempId: string;
    realId: string;
  };
}

export interface AddTodoFailure {
  type: typeof ADD_TODO_FAILURE;
  payload: {
    error: string;
  };
}

export interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: {
    id: string;
  };
}

export interface DeleteTodoInit {
  type: typeof DELETE_TODO_INIT;
  payload: {
    id: string;
  };
}

export interface DeleteTodoSuccess {
  type: typeof DELETE_TODO_SUCCESS;
}

export interface DeleteTodoFailure {
  type: typeof DELETE_TODO_FAILURE;
  payload: {
    error: string;
  };
}

export interface EditTodo {
  type: typeof EDIT_TODO;
  payload: {
    id: string;
    content: string;
    scheduled: string | null;
  };
}

export interface EditTodoInit {
  type: typeof EDIT_TODO_INIT;
  payload: {
    id: string;
    content: string;
    scheduled: string | null;
  };
}

export interface EditTodoSuccess {
  type: typeof EDIT_TODO_SUCCESS;
}

export interface EditTodoFailure {
  type: typeof EDIT_TODO_FAILURE;
  payload: {
    error: string;
  };
}

export interface FetchTodos {
  type: typeof FETCH_TODOS;
  payload: {
    uid: string;
  };
}

export interface FetchTodosInit {
  type: typeof FETCH_TODOS_INIT;
}

export interface FetchTodosSuccess {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: {
    todos: Todo[];
  };
}

export interface FetchTodosFailure {
  type: typeof FETCH_TODOS_FAILURE;
  payload: {
    error: string;
  };
}

export type TodoActionTypes =
  | AddTodo
  | AddTodoInit
  | AddTodoSuccess
  | AddTodoFailure
  | DeleteTodo
  | DeleteTodoInit
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | EditTodo
  | EditTodoInit
  | EditTodoSuccess
  | EditTodoFailure;

export type FetchTodosActionTypes =
  | FetchTodos
  | FetchTodosInit
  | FetchTodosSuccess
  | FetchTodosFailure;
