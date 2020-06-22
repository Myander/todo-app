import { authUserSaga, authLogoutSaga } from './auth/sagas';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from './auth/types';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_LOGOUT, authLogoutSaga);
}
