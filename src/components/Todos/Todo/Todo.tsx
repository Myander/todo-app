import React, { FC, useState, Fragment } from 'react';
import { Todo as TodoModel } from '../../../store/todos/types';

interface TodoProps {
  todo: TodoModel;
  onDeleteTodo: (id: string) => void;
  onHandleEdit: (id: string, content: string) => void;
}

const Todo: FC<TodoProps> = props => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(props.todo.content);

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setText(target.value);
  };

  const handleCancel = () => {
    setEdit(currEdit => !currEdit);
    setText(props.todo.content);
  };

  const handleSave = (id: string) => {
    props.onHandleEdit(id, text);
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <Fragment>
          <input value={text} onChange={handleChange} />
          <button onClick={() => handleSave(props.todo.id)}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </Fragment>
      ) : (
        <span>{props.todo.content}</span>
      )}
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>DELETE</button>
      <button onClick={() => setEdit(currEdit => !currEdit)}>EDIT</button>
    </div>
  );
};

export default Todo;
