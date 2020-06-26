import React, { FC, useState, Fragment, useRef, useEffect } from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';
import {
  InputContainer,
  RightButton,
  Input,
  TodoContent,
  ItemContainer,
  ButtonContainer,
} from './Todo.styles';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { EditIcon, DeleteIcon, IconButton } from '../../UI/Buttons/Icons';
import { BlueButton, CancelButton } from '../../UI/Buttons/Buttons.styled';

interface TodoProps {
  todo: TodoModel;
  onDeleteTodo: (id: string) => void;
  onHandleEdit: (id: string, content: string) => void;
  toggleModal: (id: string) => void;
}

const Todo: FC<TodoProps> = props => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(props.todo.content);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setText(target.value);
  };

  const handleCancel = () => {
    setEdit(currEdit => !currEdit);
    setText(props.todo.content);
  };

  const handleSave = () => {
    props.onHandleEdit(props.todo.id, text);
    setEdit(false);
  };

  const toggleEdit = () => {
    setEdit(currEdit => !currEdit);
  };

  const handleToggleModal = () => {
    props.toggleModal(props.todo.id);
  };

  useEffect(() => {
    if (edit) inputRef.current!.focus();
  });

  const todoInput = (
    <div>
      <InputContainer>
        <Input value={text} onChange={handleChange} ref={inputRef} />
        <RightButton>Schedule</RightButton>
      </InputContainer>
      <ButtonContainer>
        <BlueButton onClick={handleSave}>Save</BlueButton>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </ButtonContainer>
    </div>
  );

  const todoNormal = (
    <TodoContent>
      <ItemContainer>
        <Checkbox onCompleteTodo={props.onDeleteTodo} id={props.todo.id} />
        {props.todo.content}
      </ItemContainer>
      <ItemContainer>
        <IconButton onClick={toggleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleToggleModal}>
          <DeleteIcon />
        </IconButton>
      </ItemContainer>
    </TodoContent>
  );

  return (
    <div>
      {edit ? (
        <Fragment>{todoInput}</Fragment>
      ) : (
        <Fragment>{todoNormal}</Fragment>
      )}
    </div>
  );
};

export default Todo;
