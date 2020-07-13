import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoList from '../../../components/Todos/TodoList/TodoList';
import NewTodo from '../../../components/Todos/NewTodo/NewTodo';
import { Todo as TodoModel } from '../../../store/todos/types';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding-top: 4rem;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 3rem;
`;

interface TodayProps {
  todos: TodoModel[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, content: string, scheduled: string | null) => void;
  onAddTodo: (text: string, scheduled: string | null) => void;
  loading: boolean;
}

const Today: FC<TodayProps> = props => {
  const { todos } = props;
  const [todayTodos, setTodayTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    // console.log(props.todos);
    const today = new Date();
    const filteredTodos = todos.filter(todo => {
      if (!todo.scheduled) return false;

      const scheduled = new Date(parseInt(todo.scheduled));

      if (
        today.getFullYear() === scheduled.getFullYear() &&
        today.getMonth() === scheduled.getMonth() &&
        today.getDate() === scheduled.getDate()
      ) {
        return true;
      }
      return false;
    });

    setTodayTodos(filteredTodos);
  }, [todos]);

  return (
    <Container>
      <Title>Today</Title>
      <TodoList
        todos={todayTodos}
        onDeleteTodo={props.onDeleteTodo}
        onHandleEdit={props.onEditTodo}
        loading={props.loading}
      />
      <NewTodo onAddTodo={props.onAddTodo} />
    </Container>
  );
};

export default Today;
