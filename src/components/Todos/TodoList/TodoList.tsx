import React from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';
import Todo from '../Todo/Todo';
import { Spinner } from '../../UI/Spinner/Spinner.styled';

interface TodoListProps {
  todos: TodoModel[];
  onDeleteTodo: (id: string) => void;
  onHandleEdit: (id: string, content: string) => void;
  loading: boolean;
}

const TodoList: React.FC<TodoListProps> = props => {
  let todoList = (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDeleteTodo={props.onDeleteTodo}
            onHandleEdit={props.onHandleEdit}
          />
        </li>
      ))}
    </ul>
  );

  if (props.loading) {
    todoList = <Spinner />;
  }
  return <div>{todoList}</div>;
};

export default TodoList;
