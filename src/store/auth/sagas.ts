import { put } from 'redux-saga/effects';
import { AuthUser, AuthLogout } from './types';
import * as actions from './actions';
import firebase from '../../firebase';

export function* authUserSaga(action: AuthUser) {
  yield put(actions.authInit());
  try {
    if (action.payload.isSignUp) {
      const res = yield firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        );
      //console.log('user creds:', res.user.uid); // dispatch
      /* dispatch success called in firebase observer
      onAuthStateChanged in App.tsx */
      yield firebase.firestore().collection('settings').add({
        id: null,
        userId: res.user.uid,
        theme: 'light',
      });
    } else {
      yield firebase
        .auth()
        .signInWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        );
      /* dispatch success called in firebase observer
      onAuthStateChanged in App.tsx */
    }
  } catch (error) {
    yield put(actions.authFail(error.message));
  }
}

export function* authLogoutSaga(action: AuthLogout) {
  yield put(actions.authLogoutInit());
  try {
    yield firebase.auth().signOut();
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('isLoggedIn');
    yield localStorage.removeItem('uid');
    yield put(actions.authLogoutSuccess());
  } catch (error) {
    yield put(actions.authLogoutFail(error.message));
  }
}
