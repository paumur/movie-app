import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SigninPage.css';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';
import auth from '../../auth';

const SigninPage = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  // const [loggedin, setLoggedin] = useState();
  const authState = useSelector(auth.selectors.auth);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth.actions.login);
    auth.actions.login(user.username, user.password);
  };

  return (
    <div className='App'>
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        loggedin={authState.loggedIn}
      />
      {authState.loggedIn && <Navigate to='/content' />}
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     token: state.auth.token,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setToken: (token) => {
//       dispatch({ type: 'SET_TOKEN', token });
//     },
//   };
// }
export default SigninPage;
