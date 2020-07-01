import { FetchSettings, EditSettings, Settings } from './types';
import { put } from 'redux-saga/effects';
import * as actions from './actions';
import firebase from '../../firebase';

const COLLECTION_NAME = 'settings';

export function* EditSettingsSaga(action: EditSettings) {
  yield put(actions.editSettingsInit(action.payload.theme));
  try {
    yield firebase
      .firestore()
      .collection(COLLECTION_NAME)
      .doc(action.payload.id)
      .update({
        theme: action.payload.theme,
      });

    yield put(actions.editSettingsSuccess());
  } catch (error) {
    yield put(actions.editSettingsFailure(error.message));
  }
}

export function* FetchSettingsSaga(action: FetchSettings) {
  yield put(actions.fetchSettingsInit());

  try {
    const querySnapshot = yield firebase
      .firestore()
      .collection(COLLECTION_NAME)
      .where('userId', '==', action.payload.uid)
      .get();

    let settings: Settings | any = {};

    yield querySnapshot.forEach((doc: { data: () => any; id: string }) => {
      settings = { ...doc.data(), id: doc.id };
    });

    yield put(actions.fetchSettingsSuccess(settings));
  } catch (error) {
    yield put(actions.fetchSettingsFailure(error.message));
  }
}
