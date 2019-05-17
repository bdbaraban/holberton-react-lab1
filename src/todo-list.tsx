import React, { ReactElement } from 'react';
import Todo from './todo';
import { TodoListItem } from './todo-app.js';
import styles from './todos.module.css';

interface TodoListProps {
  todos: TodoListItem[];
  handleRemove: (id: number) => void;
}

const TodoList = ({ todos, handleRemove }: TodoListProps): ReactElement => {
  function renderList(): ReactElement | ReactElement[] {
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map(
        (todo: TodoListItem): ReactElement => (
          <Todo todo={todo} remove={handleRemove} key={todo.id} />
        )
      );
    }
    return <h5 className={styles['todoHeader']}>No todos remaining!</h5>;
  }

  return (
    <div className={`${styles['content']} ${styles['todoList']}`}>
      <h4 className={`${styles['todoHeader']} ${styles['todoTitle']}`}>
        <b>Your Todos:</b>
      </h4>
      <ul className={styles['todoList']}>{renderList()}</ul>
    </div>
  );
};

export default TodoList;
