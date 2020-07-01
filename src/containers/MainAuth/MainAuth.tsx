import React, { FC, useState, useEffect } from 'react';
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

const MainAuth: FC = () => {
  const [toggleNav, setToggleNav] = useState(true);
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

  useEffect(() => {
    const userId = localStorage.getItem('uid');
    dispatch(actions.fetchTodos(userId!));
    dispatch(settingsActions.fetchSettings(userId!));
  }, [dispatch]);

  const todoAddHandler = (text: string) => {
    dispatch(actions.addTodo(text, null, uid!));
  };

  const todoDeleteHander = (id: string) => {
    dispatch(actions.deleteTodo(id));
  };

  const todoEditHandler = (id: string, content: string) => {
    dispatch(actions.editTodo(id, content));
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
                onAddTodo={todoAddHandler}
                onDeleteTodo={todoDeleteHander}
                onEditTodo={todoEditHandler}
                todos={todoState.todos}
                loading={todoState.loading}
              />
            </Route>
            <Route path={`${path}/today`}>
              <h3>Today</h3>
            </Route>
            <Route path={`${path}/upcoming`}>
              <h3>Upcoming</h3>
            </Route>
          </Switch>
        </Content>
      </AppContainer>
    </ThemeProvider>
  );
};

export default MainAuth;
