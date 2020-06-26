import React, { useRef, useState, Fragment, useEffect } from 'react';
import { InputContainer, Input, RightButton } from '../Todo/Todo.styles';
import { BlueButton, CancelButton } from '../../UI/Buttons/Buttons.styled';
import { StyledPlusIcon, PlusButton, ElementContainer } from './NewTodo.styles';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [add, setAdd] = useState(false);
  const [content, setContent] = useState('');

  const handleAddTodo = () => {
    if (content === '') {
      alert('enter a todo');
      return;
    }
    props.onAddTodo(content);
  };

  const handleShowInput = () => {
    setAdd(currState => !currState);
  };

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setContent(target.value);
  };

  useEffect(() => {
    if (add) inputRef.current!.focus();
  });

  const todoInput = (
    <ElementContainer>
      <InputContainer>
        <Input ref={inputRef} onChange={handleChange} value={content} />
        <RightButton>Schedule</RightButton>
      </InputContainer>
      <div style={{ marginTop: '10px' }}>
        <BlueButton onClick={handleAddTodo}>Save</BlueButton>
        <CancelButton onClick={handleShowInput}>Cancel</CancelButton>
      </div>
    </ElementContainer>
  );

  return (
    <div>
      {add ? (
        <Fragment>{todoInput}</Fragment>
      ) : (
        <PlusButton onClick={handleShowInput}>
          <StyledPlusIcon />
          Add Todo
        </PlusButton>
      )}
    </div>
  );
};

export default NewTodo;
