import React, { FC, useState, useEffect, useRef } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import {
  AppContainer,
  Content,
} from '../../components/UI/AppContainer/AppContainer';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideNav from '../../components/Navigation/SideNav/SideNav';
import Inbox from './Inbox/Inbox';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../theme/themes';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/todos/actions';
import * as settingsActions from '../../store/settings/actions';
import { RootState } from '../../store/rootState';
import { Spinner } from '../../components/UI/Spinner/Spinner.styled';
import Today from './Today/Today';
import Upcoming from './Upcoming/Upcoming';
import Notification from '../../components/UI/Notification/Notification';

const MainAuth: FC = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const [notification, setNotification] = useState(false);
  const timeout = useRef<number | null>(null);
  const { path } = useRouteMatch();
  const toggleNavHandler = () => {
    setToggleNav(prevToggle => !prevToggle);
  };
  const dispatch = useDispatch();
  const selectUid = (state: RootState) => state.auth.uid;
  const selectTodos = (state: RootState) => state.todos;
  const selectSettings = (state: RootState) => state.settings.settings;
  const uid = useSelector(selectUid);
  const todoState = useSelector(selectTodos);
  const settings = useSelector(selectSettings);

  const openNotification = () => {
    if (notification)
      if (timeout.current !== null) clearTimeout(timeout.current);

    setNotification(true);
    timeout.current = setTimeout(() => {
      setNotification(false);
    }, 5000);
  };

  const closeNotification = () => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }
    setNotification(false);
  };

  useEffect(() => {
    const userId = localStorage.getItem('uid');
    dispatch(actions.fetchTodos(userId!));
    dispatch(settingsActions.fetchSettings(userId!));
  }, [dispatch]);

  const todoAddHandler = (userId: string) => (
    text: string,
    scheduled: string | null
  ) => {
    dispatch(actions.addTodo(text, scheduled, userId!));
  };

  const todoDeleteHander = (id: string) => {
    dispatch(actions.deleteTodo(id));
    openNotification();
  };

  useEffect(() => {
    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const todoEditHandler = (
    id: string,
    content: string,
    scheduled: string | null
  ) => {
    dispatch(actions.editTodo(id, content, scheduled));
  };

  const themeChangeHandler = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    dispatch(settingsActions.editSettings(newTheme, uid!, settings.id!));
  };

  if (settings.theme === '' || !uid) return <Spinner />;

  return (
    <ThemeProvider theme={settings.theme === 'light' ? lightTheme : darkTheme}>
      <Navbar
        onToggleNav={toggleNavHandler}
        onHandleThemeToggle={themeChangeHandler}
        theme={settings.theme}
      />
      <AppContainer>
        <SideNav toggleNav={toggleNav} onToggleNav={toggleNavHandler} />
        <Content toggleNav={toggleNav}>
          <Switch>
            <Route exact path={path}>
              <Inbox
                onAddTodo={todoAddHandler(uid)}
                onDeleteTodo={todoDeleteHander}
                onEditTodo={todoEditHandler}
                todos={todoState.todos}
                loading={todoState.loading}
              />
            </Route>
            <Route path={`${path}/today`}>
              <Today
                onAddTodo={todoAddHandler(uid)}
                onDeleteTodo={todoDeleteHander}
                onEditTodo={todoEditHandler}
                todos={todoState.todos}
                loading={todoState.loading}
              />
            </Route>
            <Route path={`${path}/upcoming`}>
              <Upcoming
                toggleNav={toggleNav}
                onAddTodo={todoAddHandler(uid)}
                onDeleteTodo={todoDeleteHander}
                onEditTodo={todoEditHandler}
                todos={todoState.todos}
                loading={todoState.loading}
              />
            </Route>
          </Switch>
        </Content>
        <Notification
          prevTodo={todoState.prevTodo}
          onUndo={todoAddHandler(uid)}
          notification={notification}
          closeNotification={closeNotification}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default MainAuth;
