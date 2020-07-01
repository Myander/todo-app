import { AuthState, AuthActionTypes, AuthLogoutActionTypes } from './types';
import * as actionTypes from './types';

const initialState: AuthState = {
  token: null,
  uid: null,
  email: null,
  loading: false,
  error: null,
  loggedIn: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes | AuthLogoutActionTypes
): AuthState => {
  switch (action.type) {
    case actionTypes.AUTH_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.AUTH_LOGOUT_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        uid: null,
        email: null,
        loggedIn: false,
      };

    case actionTypes.AUTH_LOGOUT_FAIL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
