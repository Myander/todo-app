import React, { FC, useState } from 'react';
import TodoList from '../../components/Todos/TodoList/TodoList';
import NewTodo from '../../components/Todos/NewTodo/NewTodo';
import { Todo } from '../../components/Todos/todo.model';

const Inbox: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   db.collection('todos')
  //     .add({
  //       createdAt: new Date(),
  //       content: 'finish setup',
  //       project: null,
  //       sheduled: null,
  //     })
  //     .then(docRef => {
  //       console.log('Document written with ID: ', docRef.id);
  //     })
  //     .catch(error => {
  //       console.error('Error adding document: ', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   db.collection('todos')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //       });
  //     });
  // }, []);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDeleteHander = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <TodoList todos={todos} onDeleteTodo={todoDeleteHander} />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default Inbox;
