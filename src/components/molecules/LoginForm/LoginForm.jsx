import React from 'react';
import Button from '../../atoms/Button/Button';
import './LoginForm.css';

const LoginForm = (props) => {
  const { handleChange, handleSubmit, loggedin } = props;
  return (
    <div className='loginCard' onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name='username' type='text' onChange={handleChange} />
        <label>Password</label>
        <input name='password' onChange={handleChange} type='password' />
        <Button>Sign in</Button>
        {loggedin === false && (
          <p className='error'>Failure: please check the login details.</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
