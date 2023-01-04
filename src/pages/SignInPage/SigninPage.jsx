import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SigninPage.css';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

const SigninPage = ({ setToken, token }) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [loggedin, setLoggedin] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://dummy-video-api.onrender.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setLoggedin(true);
          setToken(data.token);
        } else {
          setLoggedin(false);
        }
      })
      .catch((err) => {
        setLoggedin(false);
      });
  };

  return (
    <div className='App'>
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        loggedin={loggedin}
      />
      {loggedin && <Navigate to='/content' />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => {
      dispatch({ type: 'SET_TOKEN', token });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
