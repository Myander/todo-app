import { authUserSaga, authLogoutSaga } from './auth/sagas';
import {
  fetchTodosSaga,
  addTodoSaga,
  deleteTodoSaga,
  editTodoSaga,
} from './todos/sagas';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as authActionTypes from './auth/types';
import * as todoActionTypes from './todos/types';

export function* watchAuth() {
  yield takeEvery(authActionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(authActionTypes.AUTH_LOGOUT, authLogoutSaga);
}

export function* watchTodos() {
  yield takeLatest(todoActionTypes.ADD_TODO, addTodoSaga);
  yield takeEvery(todoActionTypes.DELETE_TODO, deleteTodoSaga);
  yield takeEvery(todoActionTypes.FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(todoActionTypes.EDIT_TODO, editTodoSaga);
}
