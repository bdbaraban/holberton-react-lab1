import React from 'react';
import Todo from './todo';
import { ITodoListItem } from './todo-app.js';
import styles from './todos.module.css';

interface ITodoListProps {
    todos: Array<ITodoListItem>;
    handleRemove: (id: number) => void;
}

const TodoList = (props: ITodoListProps) => {
  function renderList() {
    // check if there are todos -- provide useful message if no todos left
    if (props.todos.length > 0) {
      return props.todos.map((todo: ITodoListItem) =>
        <Todo todo={todo} remove={props.handleRemove} key={todo.id} />
      );
    }
    return <h5 className={styles['todoHeader']}>No todos remaining!</h5>;
  }

  return (
    <div className={`${styles['content']} ${styles['todoList']}`}>
      <h4 className={`${styles['todoHeader']} ${styles['todoTitle']}`}><b>Your Todos:</b></h4>
      <ul className={styles['todoList']}>{renderList()}</ul>
    </div>
  );
};

export default TodoList;
