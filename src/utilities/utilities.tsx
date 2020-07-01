import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootState';

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const auth = localStorage.getItem('isLoggedIn');
  const selectAuthStatus = (state: RootState) => state.auth.loggedIn;
  const isLoggedIn = useSelector(selectAuthStatus);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth || isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
