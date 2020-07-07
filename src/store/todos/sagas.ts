import { AddTodo, FetchTodos, DeleteTodo, Todo, EditTodo } from './types';
import { put } from 'redux-saga/effects';
import * as actions from './actions';
import firebase from '../../firebase';

const collectionName = 'todos';

export function* addTodoSaga(action: AddTodo) {
  const tempId = new Date().getTime().toString() + Math.random();
  const newTodo = {
    createdAt: new Date().getTime().toString(),
    content: action.payload.content,
    scheduled: action.payload.scheduled,
    projectId: null,
    userId: action.payload.userId,
    id: tempId, // temporary key
  };
  yield put(actions.addTodoInit(newTodo));
  try {
    const res = yield firebase
      .firestore()
      .collection(collectionName)
      .add(newTodo);
    // use returned id to replace the temp id in the app state.
    yield put(actions.addTodoSuccess(tempId, res.id));
  } catch (error) {
    yield put(actions.addTodoFailure(error.message));
  }
}

export function* deleteTodoSaga(action: DeleteTodo) {
  yield put(actions.deleteTodoInit(action.payload.id));

  try {
    yield firebase
      .firestore()
      .collection(collectionName)
      .doc(action.payload.id)
      .delete();

    yield put(actions.deleteTodoSuccess());
  } catch (error) {
    yield put(actions.deleteTodoFailure(error.message));
  }
}

export function* editTodoSaga(action: EditTodo) {
  yield put(
    actions.editTodoInit(
      action.payload.id,
      action.payload.content,
      action.payload.scheduled
    )
  );

  try {
    yield firebase
      .firestore()
      .collection(collectionName)
      .doc(action.payload.id)
      .update({
        content: action.payload.content,
        scheduled: action.payload.scheduled,
      });

    yield put(actions.editTodoSuccess());
  } catch (error) {
    yield put(actions.editTodoFailure(error.message));
  }
}

export function* fetchTodosSaga(action: FetchTodos) {
  yield put(actions.fetchTodosInit());

  try {
    const querySnapshot = yield firebase
      .firestore()
      .collection(collectionName)
      .where('userId', '==', action.payload.uid)
      .get();
    const todos: Todo[] = [];
    yield querySnapshot.forEach((doc: { data: () => any; id: string }) => {
      const todo = { ...doc.data(), id: doc.id };
      todos.push(todo);
    });
    yield put(actions.fetchTodosSuccess(todos));
  } catch (error) {
    yield put(actions.fetchTodosFailure(error.message));
  }
}
