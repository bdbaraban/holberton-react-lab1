import React, { Component, ReactElement } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import styles from './todos.module.css';

export interface TodoAppState {
  todos: TodoListItem[];
}

export interface TodoListItem {
  text: string;
  id: number;
}

class TodoApp extends Component<{}, TodoAppState> {
  public constructor(props: {}) {
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
  public addTodo(todo: TodoListItem): void {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  // Handler to remove a todo
  public removeTodo(id: number): void {
    this.setState({
      todos: this.state.todos.filter(
        (todo: TodoListItem): boolean => todo.id !== id
      )
    });
  }

  public render(): ReactElement {
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
