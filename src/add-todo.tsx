import React, { Component, ReactElement } from 'react';
import { TodoListItem } from './todo-app';
import styles from './todos.module.css';

class AddTodo extends Component<
  { handleAdd: (todo: TodoListItem) => void },
  { todoText: string }
> {
  public constructor(props: { handleAdd: (todo: TodoListItem) => void }) {
    super(props);
    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      todoText: event.currentTarget.value
    });
  }

  public handleSubmit(): void {
    this.props.handleAdd({
      text: this.state.todoText,
      id: Math.random()
    });
    this.setState({
      todoText: ''
    });
  }

  public render(): ReactElement {
    return (
      <div className={styles['content']}>
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button button-outline" onClick={this.handleSubmit}>
          To-do-me-up!
        </button>
      </div>
    );
  }
}

export default AddTodo;
