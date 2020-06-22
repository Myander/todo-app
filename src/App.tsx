import React, { useState, useEffect, useRef, useCallback } from 'react';
import Inbox from './containers/Inbox/Inbox';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
//import firebase from './firebase';
import { lightTheme, darkTheme } from './theme/themes';
import Navbar from './components/Navigation/Navbar/Navbar';
import SideNav from './components/Navigation/SideNav/SideNav';
import {
  AppContainer,
  Content,
} from './components/UI/AppContainer/AppContainer';
import { Switch, Route } from 'react-router-dom';
import Signup from './containers/Authentication/Signup';
import Login from './containers/Authentication/Login';
import firebase from './firebase';
import { Unsubscribe } from 'firebase';
import { useDispatch } from 'react-redux';
import * as actions from './store/auth/actions';

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
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }
`;

const App: React.FC = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = useState(false);
  const [toggleNav, setToggleNav] = useState(true);
  const unsub = useRef<Unsubscribe>(() => null);
  const interval = useRef<number>();
  const dispatch = useDispatch();

  const toggleNavHandler = () => {
    setToggleNav(prevToggle => !prevToggle);
  };

  const getUserToken = useCallback(
    async function (email: string | null, uid: string) {
      const token = await firebase.auth().currentUser!.getIdToken(true);
      dispatch(actions.authSuccess(email, uid, token));
      localStorage.setItem('token', token);
    },
    [dispatch]
  );

  useEffect(() => {
    unsub.current = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserToken(user.email, user.uid);
        interval.current = setInterval(getUserToken, 2700000);
      } else {
        //console.log('Logged out');
      }
    });
    return () => unsub.current();
  }, [getUserToken]);

  const themeChangeHandler = () => {
    setToggleDarkTheme(prevToggleState => !prevToggleState);
  };

  return (
    <div>
      <ThemeProvider theme={toggleDarkTheme ? darkTheme : lightTheme}>
        <Navbar
          onToggleNav={toggleNavHandler}
          toggleDarkTheme={toggleDarkTheme}
          onHandleThemeToggle={themeChangeHandler}
        />
        <AppContainer>
          <SideNav toggleNav={toggleNav} onToggleNav={toggleNavHandler} />
          <Content toggleNav={toggleNav}>
            <Switch>
              <Route path="/" exact component={Inbox} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </Content>
        </AppContainer>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

export default App;
