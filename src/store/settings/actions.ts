import * as actionTypes from './types';
import { SettingsActionTypes, Settings } from './types';

export const editSettings = (
  theme: string,
  uid: string,
  id: string
): SettingsActionTypes => {
  return {
    type: actionTypes.EDIT_SETTINGS,
    payload: {
      theme,
      uid,
      id,
    },
  };
};

export const editSettingsInit = (theme: string): SettingsActionTypes => {
  return {
    type: actionTypes.EDIT_SETTINGS_INIT,
    payload: {
      theme,
    },
  };
};

export const editSettingsSuccess = (): SettingsActionTypes => {
  return {
    type: actionTypes.EDIT_SETTINGS_SUCCESS,
  };
};

export const editSettingsFailure = (error: string): SettingsActionTypes => {
  return {
    type: actionTypes.EDIT_SETTINGS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchSettings = (uid: string): SettingsActionTypes => {
  return {
    type: actionTypes.FETCH_SETTINGS,
    payload: {
      uid,
    },
  };
};

export const fetchSettingsInit = (): SettingsActionTypes => {
  return {
    type: actionTypes.FETCH_SETTINGS_INIT,
  };
};

export const fetchSettingsSuccess = (
  settings: Settings
): SettingsActionTypes => {
  return {
    type: actionTypes.FETCH_SETTINGS_SUCCESS,
    payload: {
      settings,
    },
  };
};

export const fetchSettingsFailure = (error: string): SettingsActionTypes => {
  return {
    type: actionTypes.FETCH_SETTINGS_FAILURE,
    payload: {
      error,
    },
  };
};
