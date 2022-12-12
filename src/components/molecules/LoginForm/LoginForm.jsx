import React, { Component } from 'react';
import Button from '../../atoms/Button/Button';
import './LoginForm.css';

export default class LoginForm extends Component {
  render() {
    const { user, handleChange, handleSubmit, loggedin } = this.props;
    return (
      <div className='loginCard' onSubmit={handleSubmit}>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            name='username'
            type='text'
            onChange={handleChange}
            value={user.username}
          />
          <label>Password</label>
          <input
            name='password'
            value={user.password}
            onChange={handleChange}
            type='password'
          />
          <Button>Sign in</Button>
          {loggedin === false && (
            <p className='error'>Failure: please check the login details.</p>
          )}
        </form>
      </div>
    );
  }
}
