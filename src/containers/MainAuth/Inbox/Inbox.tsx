import React, { FC } from 'react';
import TodoList from '../../../components/Todos/TodoList/TodoList';
import NewTodo from '../../../components/Todos/NewTodo/NewTodo';
import { Todo as TodoModel } from '../../../store/todos/types';
import styled from 'styled-components';

// const tempTodos = [
//   {
//     createdAt: 'sfdas',
//     content: 'dummy data',
//     scheduled: null,
//     projectId: null,
//     userId: 'asdasfdsafdsa',
//     id: 'tester1',
//   },
//   {
//     createdAt: 'sfdas',
//     content: 'get this done!!!',
//     scheduled: null,
//     projectId: null,
//     userId: 'asdasfdsafdsa',
//     id: 'tester2',
//   },
//   {
//     createdAt: 'sfdas',
//     content: 'hurry up yo',
//     scheduled: null,
//     projectId: null,
//     userId: 'asdasfdsafdsa',
//     id: 'tester3',
//   },
// ];

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding-top: 4rem;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  font-size: 3rem;
`;

interface InboxProps {
  todos: TodoModel[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string, content: string, scheduled: string | null) => void;
  onAddTodo: (text: string, scheduled: string | null) => void;
  loading: boolean;
}

const Inbox: FC<InboxProps> = props => {
  return (
    <>
      <Container>
        <Title>Inbox</Title>
        <TodoList
          todos={props.todos}
          onDeleteTodo={props.onDeleteTodo}
          onHandleEdit={props.onEditTodo}
          loading={props.loading}
        />
        <NewTodo onAddTodo={props.onAddTodo} />
      </Container>
    </>
  );
};

export default Inbox;
