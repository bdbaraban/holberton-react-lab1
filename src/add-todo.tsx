import React, { Component } from 'react';
import { ITodoListItem } from './todo-app';
import styles from './todos.module.css';

class AddTodo extends Component<{handleAdd: (todo: ITodoListItem) => void}, {todoText: string}> {

  constructor(props: {handleAdd: (todo: ITodoListItem) => void}) {
    super(props);
    this.state = {
      todoText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
      this.setState({
          todoText: event.currentTarget.value
      });
  }

  handleSubmit() {
      this.props.handleAdd({
          text: this.state.todoText,
          id: Math.random()
      });
      this.setState({
        todoText: ''
      })
  }

  render() {
    return (
      <div className={styles['content']}>
        <input
          type='text'
          value={this.state.todoText}
          placeholder='Add todos here...'
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button className='button button-outline' onClick={this.handleSubmit}> To-do-me-up! </button>
      </div>
    );
  }
}

export default AddTodo;