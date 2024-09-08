import React from 'react';
import TodoItem from './TodoItem.jsx';
import styles from './styles/TodoList.module.css';

const TodoList = ({ todos, deleteTodo, editTodo, toggleEdit }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
