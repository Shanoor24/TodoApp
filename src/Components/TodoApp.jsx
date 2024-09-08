import React, { useEffect, useState } from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import styles from './styles/TodoApp.module.css';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, id: uuidv4(), isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className={styles.appContainer}>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleEdit={toggleEdit}
      />
    </div>
  );
};

export default TodoApp;
