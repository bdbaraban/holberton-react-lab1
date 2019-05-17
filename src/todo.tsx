import React, { ReactElement } from 'react';
import { TodoListItem } from 'todo-app';
import styles from './todos.module.css';

interface TodoProps {
  todo: TodoListItem;
  remove: (id: number) => void;
}

const Todo = ({ todo, remove }: TodoProps): ReactElement => (
  <li className={styles['todo']}>
    {todo.text}
    <button
      onClick={(): void => {
        remove(todo.id);
      }}
      className="button"
      style={{ margin: 0 }}
    >
      Todo-me-done!
    </button>
  </li>
);

export default Todo;
