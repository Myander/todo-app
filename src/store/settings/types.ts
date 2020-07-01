export const EDIT_SETTINGS = 'EDIT_SETTINGS';
export const EDIT_SETTINGS_INIT = 'EDIT_SETTINGS_INIT';
export const EDIT_SETTINGS_SUCCESS = 'EDIT_SETTINGS_SUCCESS';
export const EDIT_SETTINGS_FAILURE = 'EDIT_SETTINGS_FAILURE';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const FETCH_SETTINGS_INIT = 'FETCH_SETTINGS_INIT';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_FAILURE = 'FETCH_SETTINGS_FAILURE';

export interface Settings {
  userId: string | null;
  id: string | null;
  theme: string;
}
export interface SettingsState {
  settings: Settings;
  loading: boolean;
  error: string | null;
}

export interface EditSettings {
  type: typeof EDIT_SETTINGS;
  payload: {
    theme: string;
    uid: string;
    id: string;
  };
}
export interface EditSettingsInit {
  type: typeof EDIT_SETTINGS_INIT;
  payload: {
    theme: string;
  };
}
export interface EditSettingsSuccess {
  type: typeof EDIT_SETTINGS_SUCCESS;
}

export interface EditSettingsFailure {
  type: typeof EDIT_SETTINGS_FAILURE;
  payload: {
    error: string;
  };
}

export interface FetchSettings {
  type: typeof FETCH_SETTINGS;
  payload: {
    uid: string;
  };
}

export interface FetchSettingsInit {
  type: typeof FETCH_SETTINGS_INIT;
}

export interface FetchSettingsSuccess {
  type: typeof FETCH_SETTINGS_SUCCESS;
  payload: {
    settings: Settings;
  };
}

export interface FetchSettingsFailure {
  type: typeof FETCH_SETTINGS_FAILURE;
  payload: {
    error: string;
  };
}

export type SettingsActionTypes =
  | EditSettings
  | EditSettingsInit
  | EditSettingsSuccess
  | EditSettingsFailure
  | FetchSettings
  | FetchSettingsInit
  | FetchSettingsSuccess
  | FetchSettingsFailure;
