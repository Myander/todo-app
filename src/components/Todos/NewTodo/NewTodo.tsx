import React, { useRef } from 'react';
// import styled, { useTheme } from 'styled-components';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHander = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHander}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
