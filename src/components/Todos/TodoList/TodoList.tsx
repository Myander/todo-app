import React, { useState } from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';
import Todo from '../Todo/Todo';
import { Spinner } from '../../UI/Spinner/Spinner.styled';
import { StyledList, ButtonContainer, CenteredText } from './TodoList.styles';
import Modal from '../../UI/Modal/Modal';
import { CancelButton, RedButton } from '../../UI/Buttons/Buttons.styled';

interface TodoListProps {
  todos: TodoModel[];
  onDeleteTodo: (id: string) => void;
  onHandleEdit: (id: string, content: string) => void;
  loading: boolean;
}

const TodoList: React.FC<TodoListProps> = props => {
  const [open, setOpen] = useState(false);
  const [todoId, setTodoId] = useState('');

  const toggleOverlay = (id: string) => {
    setOpen(currOpen => !currOpen);
    setTodoId(id);
  };

  const handleDelete = () => {
    props.onDeleteTodo(todoId);
    setOpen(currOpen => !currOpen);
  };

  let todoList = (
    <StyledList>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDeleteTodo={props.onDeleteTodo}
            onHandleEdit={props.onHandleEdit}
            toggleModal={toggleOverlay}
          />
        </li>
      ))}
    </StyledList>
  );

  if (props.loading) {
    todoList = <Spinner />;
  }

  return (
    <div>
      <Modal open={open}>
        <CenteredText>Are you sure you want to delete this todo?</CenteredText>
        <ButtonContainer>
          <CancelButton onClick={() => toggleOverlay('')}>Cancel</CancelButton>
          <RedButton onClick={handleDelete}>Delete</RedButton>
        </ButtonContainer>
      </Modal>
      {todoList}
    </div>
  );
};

export default TodoList;
