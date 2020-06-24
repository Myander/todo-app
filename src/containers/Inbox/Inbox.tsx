import React, { FC, useEffect } from 'react';
import TodoList from '../../components/Todos/TodoList/TodoList';
import NewTodo from '../../components/Todos/NewTodo/NewTodo';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/todos/actions';
import { RootState } from '../../store/rootState';

const Inbox: FC = () => {
  const dispatch = useDispatch();

  const selectUid = (state: RootState) => state.auth.uid;
  const selectTodos = (state: RootState) => state.todos;
  const uid = useSelector(selectUid);
  const todoState = useSelector(selectTodos);

  useEffect(() => {
    dispatch(actions.fetchTodos());
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

  return (
    <div>
      <TodoList
        todos={todoState.todos}
        onDeleteTodo={todoDeleteHander}
        onHandleEdit={todoEditHandler}
        loading={todoState.loading}
      />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default Inbox;
