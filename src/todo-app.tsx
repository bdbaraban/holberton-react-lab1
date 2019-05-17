import React, { Component } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import styles from './todos.module.css';

export interface ITodoAppState {
    todos: Array<ITodoListItem>;
}

export interface ITodoListItem {
    text: string;
    id: number;
};

class TodoApp extends Component<{}, ITodoAppState> {
  constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: []
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  // Handler to add a todo
  addTodo(todo: ITodoListItem) {
      this.setState({
          todos: [...this.state.todos, todo]
      });
  }

  // Handler to remove a todo
  removeTodo(id: number) {
    this.setState({
        todos: this.state.todos.filter((todo: ITodoListItem) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className={styles['container']}>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;
