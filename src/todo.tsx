import React from 'react';
import { ITodoListItem } from 'todo-app';
import styles from './todos.module.css';

interface ITodoProps {
  todo: ITodoListItem;
  remove: (id: number) => void;
}

const Todo = ({todo, remove}: ITodoProps) => (
  <li className={styles['todo']}>
    {todo.text}
    <button
     onClick={() => { remove(todo.id); }}
     className="button"
     style={{ margin: 0 }}
    >
      Todo-me-done!
    </button>
  </li>
);

export default Todo;
