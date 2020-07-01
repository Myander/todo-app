export const AUTH_INIT = 'AUTH_INIT';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_INIT = 'AUTH_LOGOUT_INIT';
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL';

// state slices
export interface AuthState {
  token: string | null;
  uid: string | null;
  email: string | null;
  loading: boolean;
  error: string | null;
  loggedIn: boolean;
}

export interface AuthError {
  error: string | null;
}

export interface AuthUserData {
  email: string;
  password: string;
  isSignUp: boolean;
}

// action types
export interface AuthUser {
  type: typeof AUTH_USER;
  payload: AuthUserData;
}

export interface AuthInit {
  type: typeof AUTH_INIT;
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  payload: AuthState;
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
  payload: AuthError;
}

export interface AuthLogout {
  type: typeof AUTH_LOGOUT;
}
export interface AuthLogoutInit {
  type: typeof AUTH_LOGOUT_INIT;
}
export interface AuthLogoutSuccess {
  type: typeof AUTH_LOGOUT_SUCCESS;
}
export interface AuthLogoutFail {
  type: typeof AUTH_LOGOUT_FAIL;
  payload: AuthError;
}

export type AuthActionTypes = AuthInit | AuthSuccess | AuthFail | AuthUser;

export type AuthLogoutActionTypes =
  | AuthLogout
  | AuthLogoutInit
  | AuthLogoutFail
  | AuthLogoutSuccess;
// export type AuthLogoutActionTypes = AuthLogout | AuthLogoutSuccess;
