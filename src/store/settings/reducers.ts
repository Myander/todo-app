import { SettingsState, SettingsActionTypes } from './types';
import * as actionTypes from './types';

const initialState: SettingsState = {
  settings: {
    userId: null,
    id: null,
    theme: '',
  },
  loading: false,
  error: null,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
): SettingsState => {
  switch (action.type) {
    case actionTypes.EDIT_SETTINGS_INIT:
      return {
        ...state,
        settings: { ...state.settings, theme: action.payload.theme },
        loading: true,
        error: null,
      };
    case actionTypes.EDIT_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.EDIT_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actionTypes.FETCH_SETTINGS_INIT:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: { ...action.payload.settings },
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_SETTINGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
