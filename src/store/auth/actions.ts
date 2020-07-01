import * as actionTypes from './types';
import { AuthActionTypes, AuthLogoutActionTypes } from './types';

export const authInit = (): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_INIT,
  };
};

export const authUser = (
  email: string,
  password: string,
  isSignUp: boolean
): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_USER,
    payload: {
      email,
      password,
      isSignUp,
    },
  };
};

export const authSuccess = (
  email: string | null,
  userId: string,
  token: string
): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token,
      uid: userId,
      email,
      loading: false,
      error: null,
      loggedIn: true,
    },
  };
};

export const authFail = (error: string): AuthActionTypes => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: {
      error,
    },
  };
};

export const authLogout = (): AuthLogoutActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogoutSuccess = (): AuthLogoutActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT_SUCCESS,
  };
};
export const authLogoutFail = (error: string): AuthLogoutActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT_FAIL,
    payload: {
      error,
    },
  };
};
export const authLogoutInit = (): AuthLogoutActionTypes => {
  return {
    type: actionTypes.AUTH_LOGOUT_INIT,
  };
};
