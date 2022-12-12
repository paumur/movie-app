import React from 'react';
import './SigninPage.css';
import LoginForm from '../../components/molecules/LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

class SigninPage extends React.Component {
  state = {
    username: '',
    password: '',
    loggedin: null,
    token: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://dummy-video-api.onrender.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem('token', result.token);
          this.setState({ loggedin: true });
          this.setState({ token: result.token });
        } else {
          this.setState({ loggedin: false });
        }
      });
  }

  render() {
    const { username, password, loggedin } = this.state;

    return (
      <div className='App'>
        <LoginForm
          user={(username, password)}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          loggedin={loggedin}
        />
        {loggedin && <Navigate to='/content' />}
      </div>
    );
  }
}

export default SigninPage;
