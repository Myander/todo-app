import React, { useEffect, useRef, useCallback } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from './theme/themes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './containers/Authentication/Signup';
import Login from './containers/Authentication/Login';
import firebase from './firebase';
import { Unsubscribe } from 'firebase';
import { useDispatch } from 'react-redux';
import * as actions from './store/auth/actions';
import MainNoAuth from './containers/MainNoAuth/MainNoAuth';
import MainAuth from './containers/MainAuth/MainAuth';
import { PrivateRoute } from './utilities/utilities';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  };
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px*/
  };
  body {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.colors.backgroundMain};
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }
`;

const App: React.FC = () => {
  const unsub = useRef<Unsubscribe>(() => null);
  const interval = useRef<number>();
  const dispatch = useDispatch();

  const getUserToken = useCallback(
    async function (email: string | null, uid: string) {
      try {
        const token = await firebase.auth().currentUser!.getIdToken(true);
        dispatch(actions.authSuccess(email, uid, token));
        localStorage.setItem('token', token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('uid', uid);
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    unsub.current = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserToken(user.email, user.uid);
        interval.current = setInterval(
          () => getUserToken(user.email, user.uid),
          2700000
        );
      } else {
        //console.log('Logged out');
      }
    });
    return () => unsub.current();
  }, [getUserToken]);

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route path="/" exact component={MainNoAuth} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home">
            <MainAuth />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

export default App;
