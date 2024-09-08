import React, { useState } from 'react';
import styles from './styles/TodoItem.module.css';

const TodoItem = ({ todo, deleteTodo, editTodo, toggleEdit }) => {
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (todo.isEditing) {
      console.log(todo, 'when editing is true');
      editTodo(todo.id, newTask);
      return;
    }
    console.log(todo, 'when editing is false');
    toggleEdit(todo.id);
  };

  return (
    <div className={styles.todoItem}>
      {todo.isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{todo.task}</span>
      )}
      <div className={styles.actions}>
        <button onClick={handleEdit}>{todo.isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
